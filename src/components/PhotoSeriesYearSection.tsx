import {
  Fragment,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { Box, Typography } from "@mui/material";

import { PhotoPlaceBlock, type IPhotoCity } from "./PhotoPlaceBlock";
import { PhotoPlaceDivider } from "./PhotoPlaceDivider";
import { PhotoPlaceSectionHeader } from "./PhotoPlaceSectionHeader";

export interface IPhotoSeriesYear {
  year: string;
  city: IPhotoCity[];
}

export interface IPhotoSeriesYearSectionProps extends IPhotoSeriesYear {}

export function PhotoSeriesYearSection(props: IPhotoSeriesYearSectionProps) {
  const { year, city } = props;
  const [multiPlaceCollapsed, setMultiPlaceCollapsed] = useState<
    Record<string, boolean[]>
  >({});

  const getMultiPlaceCollapsed = (cityName: string, placeIndex: number) =>
    multiPlaceCollapsed[cityName]?.[placeIndex] ?? true;

  const setMultiPlacePlaceCollapsed = (
    cityName: string,
    placeIndex: number,
    placeCount: number,
    collapsed: boolean,
  ) => {
    setMultiPlaceCollapsed((prev) => {
      const current =
        prev[cityName] ?? Array.from({ length: placeCount }, () => true);
      const next = [...current];
      next[placeIndex] = collapsed;
      return { ...prev, [cityName]: next };
    });
  };

  const handleMultiPlaceCityHeaderToggle = (
    cityName: string,
    placeCount: number,
  ) => {
    setMultiPlaceCollapsed((prev) => {
      const current =
        prev[cityName] ?? Array.from({ length: placeCount }, () => true);
      const anyOpen = current.some((collapsed) => !collapsed);
      return {
        ...prev,
        [cityName]: anyOpen
          ? Array.from({ length: placeCount }, () => true)
          : current.map((_, index) => index !== 0),
      };
    });
  };

  const handleMultiPlaceCityHeaderKeyDown = (
    event: ReactKeyboardEvent,
    cityName: string,
    placeCount: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleMultiPlaceCityHeaderToggle(cityName, placeCount);
    }
  };

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
                {place.dividerAfter ? (
                  <PhotoPlaceDivider label={place.dividerAfter} />
                ) : null}
              </Fragment>
            );
          }

          const placeCount = cityEntry.places.length;
          const placeCollapsedStates =
            multiPlaceCollapsed[cityEntry.name] ??
            Array.from({ length: placeCount }, () => true);
          const allPlacesCollapsed = placeCollapsedStates.every(Boolean);

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
                  photosCollapsed={allPlacesCollapsed}
                  onTitleKeyDown={(event) =>
                    handleMultiPlaceCityHeaderKeyDown(
                      event,
                      cityEntry.name,
                      placeCount,
                    )
                  }
                  onToggleCollapsed={() =>
                    handleMultiPlaceCityHeaderToggle(cityEntry.name, placeCount)
                  }
                />
                {cityEntry.places.map((place, placeIndex) => (
                  <Fragment key={`${cityEntry.name}-${placeIndex}`}>
                    <PhotoPlaceBlock
                      cityName={cityEntry.name}
                      nested
                      headerVariant="placeEntry"
                      place={place}
                      photosCollapsed={getMultiPlaceCollapsed(
                        cityEntry.name,
                        placeIndex,
                      )}
                      onPhotosCollapsedChange={(collapsed) =>
                        setMultiPlacePlaceCollapsed(
                          cityEntry.name,
                          placeIndex,
                          placeCount,
                          collapsed,
                        )
                      }
                    />
                    {place.dividerAfter ? (
                      <PhotoPlaceDivider
                        label={place.dividerAfter}
                        nested
                      />
                    ) : null}
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
