import { useRef, useState } from "react";
import { Box, Collapse, Typography } from "@mui/material";
import type { MouseEvent as ReactMouseEvent, SyntheticEvent } from "react";

function isSquareImage(naturalWidth: number, naturalHeight: number): boolean {
  if (naturalWidth === 0 || naturalHeight === 0) {
    return false;
  }
  const ratio = naturalWidth / naturalHeight;
  return ratio >= 0.97 && ratio <= 1.03;
}

interface IPhotoPlaceThumbnailProps {
  alt: string;
  id: string;
  onClick: (event: ReactMouseEvent<HTMLImageElement>) => void;
  src: string;
}

function PhotoPlaceThumbnail(props: IPhotoPlaceThumbnailProps) {
  const { alt, id, onClick, src } = props;
  const [isSquare, setIsSquare] = useState(false);

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setIsSquare(isSquareImage(naturalWidth, naturalHeight));
  };

  const imageSx = {
    cursor: "zoom-in",
    display: "block",
    width: "100%",
    height: "auto",
    maxHeight: isSquare ? "100%" : 390,
    maxWidth: isSquare ? "100%" : 390,
    objectFit: "contain" as const,
    margin: "auto",
  };

  return (
    <Box
      sx={
        isSquare
          ? {
              boxSizing: "border-box",
              maxHeight: 390,
              maxWidth: 390,
              p: 3,
            }
          : undefined
      }
    >
      <Box
        alt={alt}
        component="img"
        id={id}
        loading="lazy"
        onClick={onClick}
        onLoad={handleLoad}
        src={src}
        sx={imageSx}
      />
    </Box>
  );
}

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

  const hasBeenOpenedRef = useRef(false);
  if (!photosCollapsed) {
    hasBeenOpenedRef.current = true;
  }

  if (imageUrls.length === 0) {
    return null;
  }

  const photoCountLabel = `${imageUrls.length} photo${
    imageUrls.length === 1 ? "" : "s"
  }`;

  return (
    <Collapse in={!photosCollapsed} timeout={750}>
      {hasBeenOpenedRef.current ? (
        <Box
          id={photosRegionId}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            mt: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {imageUrls.map((src, index) => (
            <PhotoPlaceThumbnail
              key={`${index}-${src}`}
              alt={`${name} — ${index + 1}`}
              id={`lightbox-thumb-${thumbIdPrefix}-${index}`}
              src={src}
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
