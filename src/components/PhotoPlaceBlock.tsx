import { Box, Divider, Typography } from "@mui/material";

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

  return (
    <Box>
      <Box sx={{ ml: 3.75, mt: 3.5 }}>
        <Typography variant="h4">{name}</Typography>
        <Divider
          flexItem
          sx={{ borderColor: "black", borderWidth: "2px", maxWidth: 350 }}
        />
        {imageUrls.length > 0 && (
          <Box
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
        )}
      </Box>
    </Box>
  );
}
