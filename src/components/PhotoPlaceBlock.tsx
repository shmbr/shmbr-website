import { useId, useState } from "react";
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

  const handleThumbClick = (event: ReactMouseEvent<HTMLImageElement>) => {
    const target = event.currentTarget;
    setLightboxRequest({
      alt: `${name} — enlarged`,
      first: readViewportRect(target.getBoundingClientRect()),
      src: target.currentSrc || target.src,
    });
  };

  const handleLightboxExited = () => {
    setLightboxRequest(null);
  };

  return (
    <Box>
      <Box sx={{ ml: 3.75, mt: 3.5 }}>
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
          onThumbClick={handleThumbClick}
        />
      </Box>
      <PhotoLightbox
        onExited={handleLightboxExited}
        request={lightboxRequest}
      />
    </Box>
  );
}
