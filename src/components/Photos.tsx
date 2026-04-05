import { Box } from "@mui/material";

import { PhotoSeriesYearSection } from "./PhotoSeriesYearSection";
import { PHOTOS } from "../data";

function Photos() {
  return (
    <Box sx={{ mt: 12 }}>
      {PHOTOS.map((entry, index) => (
        <PhotoSeriesYearSection
          key={`${entry.year}-${index}`}
          places={entry.places}
          year={entry.year}
        />
      ))}
    </Box>
  );
}

export default Photos;
