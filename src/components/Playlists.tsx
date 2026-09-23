import { Box } from "@mui/material";

import { PLAYLISTS, toPlaylistEmbedUrl } from "../playlists";
import AppLayout from "./AppLayout";
import { PageEndNav } from "./PageEndNav";
import { PageHeading } from "./PageHeading";

interface IPlaylistFrameProps {
  playlistUrl: string;
}

function PlaylistFrame(props: IPlaylistFrameProps) {
  const { playlistUrl } = props;

  return (
    <Box
      allow="autoplay *; encrypted-media *;"
      component="iframe"
      height="450"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={toPlaylistEmbedUrl(playlistUrl)}
      title={playlistUrl}
      sx={{
        border: "1px solid #000",
        height: 452,
        width: "100%",
        overflow: "hidden",
        background: "transparent",
      }}
    />
  );
}

export function Playlists() {
  return (
    <AppLayout>
      <PageHeading href="/favourite" prefix="favourite" title="playlists" />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
          flexDirection: "column",
          gap: { xs: 3, md: 4 },
          mt: { xs: 4, md: 6 },
        }}
      >
        {PLAYLISTS.map((playlistUrl) => (
          <PlaylistFrame key={playlistUrl} playlistUrl={playlistUrl} />
        ))}
      </Box>

      <PageEndNav returnHref="/favourite" />
    </AppLayout>
  );
}
