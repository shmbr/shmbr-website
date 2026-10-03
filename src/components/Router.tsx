import { Albums } from "./Albums";
import { Artists } from "./Artists";
import { Favourite } from "./Favourite";
import { Home } from "./Home";
import { Index } from "./Index";
import { Landing } from "./Landing";
import { NotFound } from "./NotFound";
import { Playlists } from "./Playlists";
import { UiLibrary } from "./UiLibrary";

function getPathname() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

export function Router() {
  const pathname = getPathname();

  switch (pathname) {
    case "/":
      return <Landing />;
    case "/photos":
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
    case "/ui":
      return <UiLibrary />;
    default:
      return <NotFound />;
  }
}
