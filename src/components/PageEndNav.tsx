import { Box, Link } from "@mui/material";

export interface IPageEndNavProps {
  returnHref?: string;
}

export function PageEndNav(props: IPageEndNavProps) {
  const { returnHref } = props;

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "flex-end",
        mt: { xs: 8, md: 12 },
        pb: { xs: 1, md: 2 },
      }}
    >
      {returnHref ? (
        <Link color="inherit" href={returnHref} underline="always" variant="body1">
          return
        </Link>
      ) : null}
      <Link color="inherit" href="/" underline="always" variant="body1">
        home
      </Link>
    </Box>
  );
}
