import { Box } from "@mui/material";

import { useBestFilter } from "../bestFilterContext";
import { BestPhotosGrid } from "./BestPhotosGrid";
import { PhotoSeriesYearSection } from "./PhotoSeriesYearSection";
import { PHOTOS } from "../data";

function Photos() {
  const { showBestOnly } = useBestFilter();

  if (showBestOnly) {
    return (
      <Box sx={{ mt: 12 }}>
        <BestPhotosGrid />
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 12 }}>
      {PHOTOS.map((entry, index) => (
        <PhotoSeriesYearSection
          key={`${entry.year}-${index}`}
          city={entry.city}
          year={entry.year}
        />
      ))}
    </Box>
  );
}

export default Photos;
