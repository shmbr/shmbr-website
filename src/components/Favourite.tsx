import { Box, Link, Typography } from "@mui/material";

import { PageEndNav } from "./PageEndNav";

interface IFavouriteNavItem {
  href?: string;
  id: string;
  title: string;
}

interface IFavouriteNavCardProps {
  item: IFavouriteNavItem;
}

const FAVOURITE_NAV: IFavouriteNavItem[] = [
  { id: "albums", title: "albums", href: "/favourite/albums" },
  { id: "artists", title: "artists", href: "/favourite/artists" },
  { id: "playlists", title: "playlists", href: "/favourite/playlists" },
  { id: "todo", title: "" },
];

function FavouriteNavCard(props: IFavouriteNavCardProps) {
  const { item } = props;
  const { href, title } = item;
  const isAvailable = Boolean(href);

  return (
    <Box
      {...(href
        ? { component: Link, href, underline: "none" }
        : { component: "div", "aria-disabled": true })}
      sx={{
        alignItems: "flex-start",
        bgcolor: isAvailable ? "background.paper" : "transparent",
        border: "2px solid",
        borderColor: isAvailable ? "text.primary" : "#ddd",
        color: isAvailable ? "text.primary" : "#bbb",
        cursor: isAvailable ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: { xs: 180, md: "36vh" },
        p: { xs: 3, md: 4 },
        pointerEvents: isAvailable ? "auto" : "none",
        textDecoration: "none",
        transition: "all 520ms ease",
        "&:hover": isAvailable
          ? {
              bgcolor: "primary.main",
              borderStyle: "dashed",
            }
          : undefined,
      }}
    >
      {title ? <Typography variant="h2">{title}</Typography> : null}
      {isAvailable ? null : (
        <Typography color="inherit" variant="caption">
          todo
        </Typography>
      )}
    </Box>
  );
}

export function Favourite() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        px: { xs: 2, md: 6 },
        py: { xs: 3, md: 4 },
      }}
    >
      <Typography variant="h1">favourite</Typography>

      <Box
        sx={{
          display: "grid",
          flex: 1,
          gap: { xs: 2, md: 3 },
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          mt: { xs: 4, md: 6 },
        }}
      >
        {FAVOURITE_NAV.map((item) => (
          <FavouriteNavCard key={item.id} item={item} />
        ))}
      </Box>

      <PageEndNav />
    </Box>
  );
}
