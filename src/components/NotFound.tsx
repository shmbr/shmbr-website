import { Box, Link, Typography } from "@mui/material";

import AppLayout from "./AppLayout";

export function NotFound() {
  return (
    <AppLayout showHeader={false} showFooter={false}>
      <Box sx={{ pt: { xs: 2, md: 4 } }}>
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
            display: "inline-block",
            fontSize: { xs: 20, md: 30 },
            mt: { xs: 4, md: 6 },
          }}
        >
          to home
        </Link>
      </Box>
    </AppLayout>
  );
}
