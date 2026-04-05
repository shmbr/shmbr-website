import { Box, Collapse } from "@mui/material";
import type { MouseEvent as ReactMouseEvent } from "react";

export interface IPhotoPlaceThumbnailsProps {
  imageUrls: string[];
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
    imageUrls,
    name,
    photosCollapsed,
    onThumbClick,
    photosRegionId,
    thumbIdPrefix,
  } = props;

  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <Collapse in={!photosCollapsed} timeout={750}>
      <Box
        id={photosRegionId}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          mt: 2,
        }}
      >
        {imageUrls.map((src, index) => (
          <Box
            key={`${index}-${src}`}
            alt={`${name} — ${index + 1}`}
            component="img"
            id={`lightbox-thumb-${thumbIdPrefix}-${index}`}
            loading="lazy"
            onClick={(event) => onThumbClick(event, index)}
            src={src}
            sx={{
              cursor: "zoom-in",
              display: "block",
              width: "100%",
              height: "auto",
              maxHeight: 350,
              maxWidth: 350,
              objectFit: "contain",
              margin: "auto",
            }}
          />
        ))}
      </Box>
    </Collapse>
  );
}
