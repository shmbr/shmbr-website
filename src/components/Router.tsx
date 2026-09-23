import { Albums } from "./Albums";
import { Concerts } from "./Concerts";
import { Favourite } from "./Favourite";
import { Home } from "./Home";
import { Index } from "./Index";
import { NotFound } from "./NotFound";
import { Playlists } from "./Playlists";
import { Tracks } from "./Tracks";

function getPathname() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

export function Router() {
  const pathname = getPathname();

  switch (pathname) {
    case "/":
      return <Home />;
    case "/index":
      return <Index />;
    case "/concerts":
      return <Concerts />;
    case "/favourite":
      return <Favourite />;
    case "/favourite/albums":
      return <Albums />;
    case "/favourite/tracks":
      return <Tracks />;
    case "/favourite/playlists":
      return <Playlists />;
    default:
      return <NotFound />;
  }
}
