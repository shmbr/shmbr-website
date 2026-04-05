import { useCallback, useId, useMemo, useState } from "react";
import { Box } from "@mui/material";
import type {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from "react";
import { PhotoLightbox, type IPhotoLightboxRequest } from "./PhotoLightbox";
import { PhotoPlaceSectionHeader } from "./PhotoPlaceSectionHeader";
import { PhotoPlaceThumbnails } from "./PhotoPlaceThumbnails";
import { readViewportRect } from "./photoLightboxGeometry";

export interface IPhotoPlace {
  name: string;
  imageUrls: string[];
}

export interface IPhotoPlaceBlockProps {
  place: IPhotoPlace;
}

export function PhotoPlaceBlock(props: IPhotoPlaceBlockProps) {
  const { place } = props;
  const { name, imageUrls } = place;
  const photosRegionId = useId();
  const thumbIdPrefix = useMemo(
    () => photosRegionId.replace(/:/g, ""),
    [photosRegionId],
  );
  const [photosCollapsed, setPhotosCollapsed] = useState(true);
  const [lightboxRequest, setLightboxRequest] =
    useState<IPhotoLightboxRequest | null>(null);

  const togglePhotosCollapsed = () => {
    setPhotosCollapsed((prev) => !prev);
  };

  const handleTitleKeyDown = (event: ReactKeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      togglePhotosCollapsed();
    }
  };

  const handleThumbClick = (
    event: ReactMouseEvent<HTMLImageElement>,
    thumbIndex: number,
  ) => {
    const target = event.currentTarget;
    setLightboxRequest({
      imageUrls,
      index: thumbIndex,
      openFirst: readViewportRect(target.getBoundingClientRect()),
      placeName: name,
      sessionKey: Date.now(),
      thumbIdPrefix,
    });
  };

  const handleLightboxExited = () => {
    setLightboxRequest(null);
  };

  const handleLightboxNavigateIndex = useCallback((nextIndex: number) => {
    setLightboxRequest((prev) => (prev ? { ...prev, index: nextIndex } : prev));
  }, []);

  return (
    <Box>
      <Box sx={{ ml: { xs: 0, sm: 3, md: 3.75 }, mt: { xs: 2, md: 3.5 } }}>
        <PhotoPlaceSectionHeader
          name={name}
          photosCollapsed={photosCollapsed}
          photosRegionId={photosRegionId}
          onTitleKeyDown={handleTitleKeyDown}
          onToggleCollapsed={togglePhotosCollapsed}
        />
        <PhotoPlaceThumbnails
          imageUrls={imageUrls}
          name={name}
          photosCollapsed={photosCollapsed}
          photosRegionId={photosRegionId}
          thumbIdPrefix={thumbIdPrefix}
          onThumbClick={handleThumbClick}
        />
      </Box>
      <PhotoLightbox
        onExited={handleLightboxExited}
        onNavigateIndex={handleLightboxNavigateIndex}
        request={lightboxRequest}
      />
    </Box>
  );
}
