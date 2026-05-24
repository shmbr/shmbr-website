import { Fragment } from "react";
import { Box, Typography } from "@mui/material";

import { PhotoPlaceBlock, type IPhotoCity } from "./PhotoPlaceBlock";
import { PhotoPlaceSectionHeader } from "./PhotoPlaceSectionHeader";

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
        {city.map((cityEntry) => {
          const multiPlace = cityEntry.places.length > 1;

          if (!multiPlace) {
            const place = cityEntry.places[0];
            return (
              <Fragment key={cityEntry.name}>
                <PhotoPlaceBlock
                  cityName={cityEntry.name}
                  coordinates={cityEntry.coordinates}
                  place={place}
                />
              </Fragment>
            );
          }

          return (
            <Fragment key={cityEntry.name}>
              <Box
                sx={{
                  ml: { xs: 0, sm: 3, md: 3.75 },
                  mt: { xs: 2, md: 2 },
                  mb: 3,
                }}
              >
                <PhotoPlaceSectionHeader
                  variant="city"
                  title={cityEntry.name}
                  subtitle={cityEntry.coordinates}
                />
                {cityEntry.places.map((place, placeIndex) => (
                  <Fragment key={`${cityEntry.name}-${placeIndex}`}>
                    <PhotoPlaceBlock
                      cityName={cityEntry.name}
                      nested
                      headerVariant="placeEntry"
                      place={place}
                    />
                  </Fragment>
                ))}
              </Box>
            </Fragment>
          );
        })}
      </Box>
    </Box>
  );
}
