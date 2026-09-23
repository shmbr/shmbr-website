import { Box, Link, Typography } from "@mui/material";

export function NotFound() {
  return (
    <Box sx={{ pt: { xs: 2, md: 4 }, px: { xs: 2, md: 6 } }}>
      <Typography
        sx={{
          fontSize: { xs: 72, md: 120 },
          lineHeight: 1.2,
          fontFamily: "Courier Prime",
        }}
      >
        /404 <br /> not <br /> found <br /> :(
      </Typography>

      <Link
        href="/"
        color="inherit"
        underline="always"
        sx={{
          fontSize: { xs: 20, md: 30 },
          position: "absolute",
          bottom: { xs: 24, md: 80 },
          right: { xs: 24, md: 80 },
        }}
      >
        to home
      </Link>
    </Box>
  );
}
