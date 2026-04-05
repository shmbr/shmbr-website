import { Box, Typography } from "@mui/material";

import { PhotoPlaceBlock, type IPhotoPlace } from "./PhotoPlaceBlock";

export interface IPhotoSeriesYear {
  year: string;
  places: IPhotoPlace[];
}

export interface IPhotoSeriesYearSectionProps extends IPhotoSeriesYear {}

export function PhotoSeriesYearSection(props: IPhotoSeriesYearSectionProps) {
  const { year, places } = props;

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h2">-{year}</Typography>
      <Box>
        {places.map((place, index) => (
          <PhotoPlaceBlock key={`${place.name}-${index}`} place={place} />
        ))}
      </Box>
    </Box>
  );
}
