import { Box, Link, Typography } from "@mui/material";

import { ARTISTS } from "../artists";
import { CONTACT_EMAIL } from "../contact";

export function Artists() {
  return (
    <Box
      display="grid"
      justifyItems="start"
      rowGap={2}
      sx={{
        pt: 4,
        px: 6,
      }}
    >
      <Typography
        variant="body1"
        component="blockquote"
        color="text.secondary"
        sx={{
          m: 0,
          maxWidth: 320,
          fontStyle: "italic",
          position: { md: "fixed" },
          right: { md: 48 },
          top: { md: "50%" },
          transform: { md: "translateY(-50%)" },
          borderLeft: "3px solid",
          borderColor: "primary.main",
          pl: 2,
        }}
      >
        concerts i'd love to attend.
        <br />
        <Link
          href={`mailto:${CONTACT_EMAIL}`}
          color="inherit"
          underline="hover"
        >
          reach out
        </Link>{" "}
        if you wanna to go together
      </Typography>

      <Typography
        variant="body1"
        component="ul"
        sx={{
          m: 0,
          width: "fit-content",
          gridRow: { xs: 2, md: 1 },
        }}
      >
        {ARTISTS.map((artist) => (
          <li key={artist}>{artist}</li>
        ))}
      </Typography>
    </Box>
  );
}
