import { Box, Link, Typography } from "@mui/material";
import { useState } from "react";

import { ALBUMS, type IAlbum } from "../albums";
import brokenImgSrc from "../assets/broken-img.svg";
import AppLayout from "./AppLayout";
import { PageEndNav } from "./PageEndNav";

interface IAlbumCoverProps {
  album: IAlbum;
}

function AlbumCover(props: IAlbumCoverProps) {
  const { album } = props;
  const [artworkSrc, setArtworkSrc] = useState(album.artworkUrl);
  const [isBroken, setIsBroken] = useState(false);

  const handleArtworkError = () => {
    if (isBroken) {
      return;
    }
    setIsBroken(true);
    setArtworkSrc(brokenImgSrc);
  };

  return (
    <Box component="figure" sx={{ m: 0 }}>
      <Box
        alt={`${album.artist} — ${album.title}`}
        component="img"
        loading="lazy"
        onError={handleArtworkError}
        src={artworkSrc}
        sx={{
          aspectRatio: "1 / 1",
          display: "block",
          height: "auto",
          objectFit: isBroken ? "contain" : "cover",
          width: "100%",
          boxShadow: 1,
          transition: "box-shadow 360ms ease",
          "&:hover": {
            boxShadow: 5,
          },
        }}
      />
      <Box component="figcaption" sx={{ mt: 1.25 }}>
        <Typography
          color="text.secondary"
          variant="caption"
          fontFamily="Courier New"
        >
          {album.artist}
        </Typography>
        <Typography
          variant="body1"
          fontFamily="Courier New"
          sx={{ lineHeight: 1.25 }}
        >
          {album.title}
        </Typography>
      </Box>
    </Box>
  );
}

export function Albums() {
  return (
    <AppLayout>
      <Box
        display="flex"
        alignItems="baseline"
        gap={3}
        sx={{ mt: { xs: 2, md: 4 } }}
      >
        <Typography
          component={Link}
          href="/favourite"
          underline="none"
          variant="h2"
          color="inherit"
          sx={{ "&:hover": { textDecoration: "underline" } }}
        >
          favourite
        </Typography>
        <Typography variant="h1">albums</Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: { xs: 2.5, md: 3.5 },
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            sm: "repeat(3, minmax(0, 1fr))",
            md: "repeat(4, minmax(0, 1fr))",
            lg: "repeat(5, minmax(0, 1fr))",
          },
          mt: { xs: 6, md: 10 },
        }}
      >
        {ALBUMS.map((album) => (
          <AlbumCover key={`${album.artist}-${album.title}`} album={album} />
        ))}
      </Box>

      <PageEndNav returnHref="/favourite" />
    </AppLayout>
  );
}
