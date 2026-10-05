import { useRef, useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import type { MouseEvent as ReactMouseEvent, SyntheticEvent } from "react";

import type { IPhotoImage } from "./PhotoPlaceBlock";

const THUMB_SIZE = 390;

export const photoThumbnailsGridSx = {
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: 4,
  justifyContent: "space-evenly",
} as const;

function isSquareImage(naturalWidth: number, naturalHeight: number): boolean {
  if (naturalWidth === 0 || naturalHeight === 0) {
    return false;
  }
  const ratio = naturalWidth / naturalHeight;
  return ratio >= 0.97 && ratio <= 1.03;
}

function fileNameFromUrl(url: string): string {
  const path = url.split("?")[0] ?? url;
  const segment = path.split("/").pop() ?? path;

  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

interface IPhotoPlaceThumbnailProps {
  alt: string;
  id: string;
  onClick: (event: ReactMouseEvent<HTMLImageElement>) => void;
  src: string;
}

export function PhotoPlaceThumbnail(props: IPhotoPlaceThumbnailProps) {
  const { alt, id, onClick, src } = props;
  const [isSquare, setIsSquare] = useState(false);
  const fileName = import.meta.env.DEV ? fileNameFromUrl(src) : null;

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setIsSquare(isSquareImage(naturalWidth, naturalHeight));
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        boxSizing: "border-box",
        display: "flex",
        flex: "0 0 auto",
        justifyContent: "center",
        maxWidth: "100%",
        minWidth: 0,
        p: isSquare ? 3 : 0,
        width: THUMB_SIZE,
      }}
    >
      <Box
        sx={{
          display: "inline-block",
          lineHeight: 0,
          maxWidth: "100%",
          position: fileName ? "relative" : undefined,
          ...(fileName
            ? { "&:hover .photo-file-name": { opacity: 1 } }
            : null),
        }}
      >
        <Box
          alt={alt}
          component="img"
          id={id}
          loading="lazy"
          onClick={onClick}
          onLoad={handleLoad}
          src={src}
          sx={{
            cursor: "zoom-in",
            display: "block",
            height: "auto",
            maxHeight: THUMB_SIZE,
            maxWidth: "100%",
            objectFit: "contain",
            width: "auto",
          }}
        />
        {fileName ? (
          <Typography
            className="photo-file-name"
            component="span"
            variant="caption"
            sx={{
              bgcolor: "background.default",
              bottom: 0,
              color: "text.secondary",
              left: 0,
              opacity: 0,
              pointerEvents: "none",
              position: "absolute",
              px: 0.5,
              py: 0.25,
              right: 0,
              textAlign: "center",
              transition: "opacity 120ms ease",
            }}
          >
            {fileName}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}

export interface IPhotoPlaceThumbnailsProps {
  images: IPhotoImage[];
  name: string;
  photosCollapsed: boolean;
  onThumbClick: (
    event: ReactMouseEvent<HTMLImageElement>,
    index: number,
  ) => void;
  photosRegionId: string;
  thumbIdPrefix: string;
}

export function PhotoPlaceThumbnails(props: IPhotoPlaceThumbnailsProps) {
  const {
    images,
    name,
    photosCollapsed,
    onThumbClick,
    photosRegionId,
    thumbIdPrefix,
  } = props;

  const hasBeenOpenedRef = useRef(false);
  if (!photosCollapsed) {
    hasBeenOpenedRef.current = true;
  }

  if (images.length === 0) {
    return null;
  }

  const photoCountLabel = `${images.length} photo${
    images.length === 1 ? "" : "s"
  }`;

  return (
    <Collapse in={!photosCollapsed} timeout={750}>
      {hasBeenOpenedRef.current ? (
        <Box id={photosRegionId} sx={{ ...photoThumbnailsGridSx, mt: 1 }}>
          {images.map((image, index) => (
            <PhotoPlaceThumbnail
              key={`${index}-${image.url}`}
              alt={`${name} — ${index + 1}`}
              id={`lightbox-thumb-${thumbIdPrefix}-${index}`}
              src={image.url}
              onClick={(event) => onThumbClick(event, index)}
            />
          ))}
          <Box sx={{ width: "100%" }}>
            <Typography
              component="div"
              color="text.secondary"
              sx={{ textAlign: "center" }}
              variant="caption"
            >
              {photoCountLabel}
            </Typography>
          </Box>
        </Box>
      ) : null}
    </Collapse>
  );
}
