import { useCallback, useId, useMemo, useState } from "react";
import { Box } from "@mui/material";
import type {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
} from "react";
import { filterPlaceImages, useBestFilter } from "../bestFilterContext";
import { PhotoLightbox, type IPhotoLightboxRequest } from "./PhotoLightbox";
import {
  PhotoPlaceSectionHeader,
  type PhotoPlaceSectionHeaderVariant,
} from "./PhotoPlaceSectionHeader";
import { PhotoPlaceThumbnails } from "./PhotoPlaceThumbnails";
import { readViewportRect } from "./photoLightboxGeometry";

export interface IPhotoImage {
  url: string;
  best: boolean;
}

export interface IPhotoPlaceEntry {
  month?: string;
  info?: string;
  imageUrls: IPhotoImage[];
  dividerAfter?: string;
}

export interface IPhotoCity {
  name: string;
  coordinates?: string;
  places: IPhotoPlaceEntry[];
}

export interface IPhotoPlaceBlockProps {
  cityName: string;
  coordinates?: string;
  place: IPhotoPlaceEntry;
  headerVariant?: PhotoPlaceSectionHeaderVariant;
  nested?: boolean;
  photosCollapsed?: boolean;
  onPhotosCollapsedChange?: (collapsed: boolean) => void;
}

export function PhotoPlaceBlock(props: IPhotoPlaceBlockProps) {
  const {
    cityName,
    coordinates,
    place,
    headerVariant = "city",
    nested = false,
    photosCollapsed: photosCollapsedProp,
    onPhotosCollapsedChange,
  } = props;
  const { month, info, imageUrls } = place;
  const { showBestOnly } = useBestFilter();
  const visibleImages = useMemo(
    () => filterPlaceImages(imageUrls, showBestOnly),
    [imageUrls, showBestOnly],
  );
  const displaySubtitle =
    headerVariant === "placeEntry" ? undefined : coordinates;
  const photosRegionId = useId();
  const thumbIdPrefix = useMemo(
    () => photosRegionId.replace(/:/g, ""),
    [photosRegionId],
  );
  const [photosCollapsedInternal, setPhotosCollapsedInternal] = useState(true);
  const photosCollapsed = photosCollapsedProp ?? photosCollapsedInternal;
  const [lightboxRequest, setLightboxRequest] =
    useState<IPhotoLightboxRequest | null>(null);

  const togglePhotosCollapsed = () => {
    const next = !photosCollapsed;
    if (onPhotosCollapsedChange) {
      onPhotosCollapsedChange(next);
    } else {
      setPhotosCollapsedInternal(next);
    }
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
      imageUrls: visibleImages.map((image) => image.url),
      index: thumbIndex,
      openFirst: readViewportRect(target.getBoundingClientRect()),
      placeName: cityName,
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

  if (visibleImages.length === 0) {
    return null;
  }

  return (
    <Box>
      <Box
        sx={
          nested
            ? { mt: 1 }
            : { ml: { xs: 0, sm: 3, md: 3.75 }, mt: { xs: 2, md: 2 } }
        }
      >
        <PhotoPlaceSectionHeader
          variant={headerVariant}
          title={cityName}
          month={month}
          info={info}
          subtitle={displaySubtitle}
          photosCollapsed={photosCollapsed}
          photosRegionId={photosRegionId}
          onTitleKeyDown={handleTitleKeyDown}
          onToggleCollapsed={togglePhotosCollapsed}
        />
        <PhotoPlaceThumbnails
          images={visibleImages}
          name={cityName}
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
