import { Fragment } from "react";
import { Box, Typography } from "@mui/material";

import { PhotoPlaceBlock, type IPhotoCity } from "./PhotoPlaceBlock";
import { PhotoPlaceDivider } from "./PhotoPlaceDivider";

export interface IPhotoSeriesYear {
  year: string;
  city: IPhotoCity[];
}

export interface IPhotoSeriesYearSectionProps extends IPhotoSeriesYear {}

export function PhotoSeriesYearSection(props: IPhotoSeriesYearSectionProps) {
  const { year, city } = props;

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h2">-{year}</Typography>
      <Box>
        {city.map((cityEntry) =>
          cityEntry.places.map((place, placeIndex) => (
            <Fragment key={`${cityEntry.name}-${placeIndex}`}>
              <PhotoPlaceBlock
                place={{
                  name: cityEntry.name,
                  coordinates: cityEntry.coordinates,
                  imageUrls: place.imageUrls,
                  dividerAfter: place.dividerAfter,
                }}
              />
              {place.dividerAfter ? (
                <PhotoPlaceDivider label={place.dividerAfter} />
              ) : null}
            </Fragment>
          )),
        )}
      </Box>
    </Box>
  );
}
