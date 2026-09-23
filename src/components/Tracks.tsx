import { Box, Typography } from "@mui/material";

import { SONGS, type ISong } from "../songs";
import AppLayout from "./AppLayout";
import { PageEndNav } from "./PageEndNav";
import { PageHeading } from "./PageHeading";

interface ITrackRowProps {
  song: ISong;
}

function TrackRow(props: ITrackRowProps) {
  const { song } = props;

  return (
    <Box
      component="li"
      sx={{
        display: "grid",
        gap: { xs: 0.25, sm: 4 },
        gridTemplateColumns: { xs: "1fr", sm: "minmax(0, 1.6fr) minmax(0, 1fr)" },
        py: 1.25,
        borderBottom: "1px solid",
        borderColor: "#eee",
      }}
    >
      <Typography variant="body1" sx={{ lineHeight: 1.25 }}>
        {song.title}
      </Typography>
      <Typography color="text.secondary" variant="body1">
        {song.artist}
      </Typography>
    </Box>
  );
}

export function Tracks() {
  return (
    <AppLayout>
      <PageHeading href="/favourite" prefix="favourite" title="tracks" />

      <Box
        component="ul"
        sx={{
          listStyle: "none",
          m: 0,
          mt: { xs: 6, md: 10 },
          p: 0,
        }}
      >
        {SONGS.map((song, index) => (
          <TrackRow key={`${song.artist}-${song.title}-${index}`} song={song} />
        ))}
      </Box>

      <PageEndNav returnHref="/favourite" />
    </AppLayout>
  );
}
