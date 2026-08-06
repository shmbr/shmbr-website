import { useCallback, useId, useMemo, useState } from "react";
import { Box } from "@mui/material";
import type { MouseEvent as ReactMouseEvent } from "react";

import { PHOTOS } from "../data";
import type { IPhotoImage } from "./PhotoPlaceBlock";
import { PhotoLightbox, type IPhotoLightboxRequest } from "./PhotoLightbox";
import {
  PhotoPlaceThumbnail,
  photoThumbnailsGridSx,
} from "./PhotoPlaceThumbnails";
import type { IPhotoSeriesYear } from "./PhotoSeriesYearSection";
import { readViewportRect } from "./photoLightboxGeometry";

function collectBestImages(photos: IPhotoSeriesYear[]): IPhotoImage[] {
  const bestImages: IPhotoImage[] = [];

  for (const entry of photos) {
    for (const cityEntry of entry.city) {
      for (const place of cityEntry.places) {
        for (const image of place.imageUrls) {
          if (image.best) {
            bestImages.push(image);
          }
        }
      }
    }
  }

  return bestImages;
}

export function BestPhotosGrid() {
  const bestImages = useMemo(() => collectBestImages(PHOTOS), []);
  const thumbIdPrefix = useId().replace(/:/g, "");
  const [lightboxRequest, setLightboxRequest] =
    useState<IPhotoLightboxRequest | null>(null);

  const handleThumbClick = (
    event: ReactMouseEvent<HTMLImageElement>,
    thumbIndex: number,
  ) => {
    const target = event.currentTarget;
    setLightboxRequest({
      imageUrls: bestImages.map((image) => image.url),
      index: thumbIndex,
      openFirst: readViewportRect(target.getBoundingClientRect()),
      placeName: "Best",
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

  if (bestImages.length === 0) {
    return null;
  }

  return (
    <>
      <Box sx={photoThumbnailsGridSx}>
        {bestImages.map((image, index) => (
          <PhotoPlaceThumbnail
            key={`${index}-${image.url}`}
            alt={`Best — ${index + 1}`}
            id={`lightbox-thumb-${thumbIdPrefix}-${index}`}
            src={image.url}
            onClick={(event) => handleThumbClick(event, index)}
          />
        ))}
      </Box>
      <PhotoLightbox
        onExited={handleLightboxExited}
        onNavigateIndex={handleLightboxNavigateIndex}
        request={lightboxRequest}
      />
    </>
  );
}
