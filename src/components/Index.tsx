import { Box, Link } from "@mui/material";

interface IIndexRoute {
  href: string;
}

interface IIndexRouteLinkProps {
  route: IIndexRoute;
}

const INDEX_ROUTES: IIndexRoute[] = [
  { href: "/" },
  { href: "/concerts" },
  { href: "/favourite" },
  { href: "/favourite/albums" },
  { href: "/favourite/tracks" },
];

function IndexRouteLink(props: IIndexRouteLinkProps) {
  const { route } = props;

  return (
    <Box component="li">
      <Link color="inherit" href={route.href} underline="hover" variant="body1">
        {route.href}
      </Link>
    </Box>
  );
}

export function Index() {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        listStyle: "none",
        m: 0,
        pt: { xs: 3, md: 4 },
        px: { xs: 2, md: 6 },
      }}
    >
      {INDEX_ROUTES.map((route) => (
        <IndexRouteLink key={route.href} route={route} />
      ))}
    </Box>
  );
}
