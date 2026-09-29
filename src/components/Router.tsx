import { Albums } from "./Albums";
import { Artists } from "./Artists";
import { Favourite } from "./Favourite";
import { Home } from "./Home";
import { Index } from "./Index";
import { NotFound } from "./NotFound";
import { Playlists } from "./Playlists";

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
    case "/favourite":
      return <Favourite />;
    case "/favourite/albums":
      return <Albums />;
    case "/favourite/artists":
      return <Artists />;
    case "/favourite/playlists":
      return <Playlists />;
    default:
      return <NotFound />;
  }
}
