import { Box } from "@mui/material";

import {
  PhotoSeriesYearSection,
  type IPhotoSeriesYear,
} from "./PhotoSeriesYearSection";

const PHOTO_SERIES: IPhotoSeriesYear[] = [
  {
    year: "2024",
    places: [
      {
        name: "Paris",
        imageUrls: [
          "https://9ttkpiklpeguudoy.public.blob.vercel-storage.com/DSCF7254.JPG",
          "https://9ttkpiklpeguudoy.public.blob.vercel-storage.com/DSCF7364.JPG",
          "https://9ttkpiklpeguudoy.public.blob.vercel-storage.com/DSCF7383.JPG",
          "https://9ttkpiklpeguudoy.public.blob.vercel-storage.com/DSCF7618.JPG",
          "https://9ttkpiklpeguudoy.public.blob.vercel-storage.com/DSCF7920.jpeg",
        ],
      },
      { name: "Lyon", imageUrls: [] },
    ],
  },
  {
    year: "2023",
    places: [{ name: "Berlin", imageUrls: [] }],
  },
];

function Photos() {
  return (
    <Box sx={{ mt: 12 }}>
      {PHOTO_SERIES.map((entry, index) => (
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
