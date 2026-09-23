import { Box, Link, Typography } from "@mui/material";

export interface IPageHeadingProps {
  href: string;
  prefix: string;
  title: string;
}

export function PageHeading(props: IPageHeadingProps) {
  const { href, prefix, title } = props;

  return (
    <Box
      display="flex"
      alignItems="baseline"
      flexWrap="wrap"
      gap={3}
      rowGap={0}
      sx={{ mt: { xs: 2, md: 4 } }}
    >
      <Typography
        component={Link}
        href={href}
        underline="none"
        variant="h2"
        color="inherit"
        sx={{ "&:hover": { textDecoration: "underline" } }}
      >
        {prefix}
      </Typography>
      <Typography variant="h1">{title}</Typography>
    </Box>
  );
}
