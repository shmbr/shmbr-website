import { useId, useState } from "react";
import { Box, Collapse, Divider, Typography } from "@mui/material";

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

  const togglePhotosCollapsed = () => {
    setPhotosCollapsed((prev) => !prev);
  };

  const handleTitleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      togglePhotosCollapsed();
    }
  };

  return (
    <Box>
      <Box sx={{ ml: 3.75, mt: 3.5 }}>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            backgroundColor: "background.default",
            pb: 1,
          }}
        >
          <Typography variant="h4" component="h4" sx={{ m: 0 }}>
            <Box
              aria-controls={photosRegionId}
              aria-expanded={!photosCollapsed}
              onClick={togglePhotosCollapsed}
              onKeyDown={handleTitleKeyDown}
              role="button"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              tabIndex={0}
            >
              {name}
            </Box>
          </Typography>
          <Divider
            flexItem
            sx={{ borderColor: "black", borderWidth: "2px", maxWidth: 350 }}
          />
        </Box>

        {imageUrls.length > 0 && (
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
                  src={src}
                  sx={{
                    display: "block",
                    maxWidth: "100%",
                    maxHeight: 320,
                  }}
                />
              ))}
            </Box>
          </Collapse>
        )}
      </Box>
    </Box>
  );
}
