import { Box, Collapse } from "@mui/material";
import type { MouseEvent as ReactMouseEvent } from "react";

export interface IPhotoPlaceThumbnailsProps {
  imageUrls: string[];
  name: string;
  photosCollapsed: boolean;
  photosRegionId: string;
  onThumbClick: (event: ReactMouseEvent<HTMLImageElement>) => void;
}

export function PhotoPlaceThumbnails(props: IPhotoPlaceThumbnailsProps) {
  const { imageUrls, name, photosCollapsed, photosRegionId, onThumbClick } =
    props;

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
          gap: 2,
          mt: 2,
        }}
      >
        {imageUrls.map((src, index) => (
          <Box
            key={`${index}-${src}`}
            alt={`${name} — ${index + 1}`}
            component="img"
            loading="lazy"
            onClick={onThumbClick}
            src={src}
            sx={{
              cursor: "zoom-in",
              display: "block",
              maxHeight: 320,
              maxWidth: "100%",
            }}
          />
        ))}
      </Box>
    </Collapse>
  );
}
