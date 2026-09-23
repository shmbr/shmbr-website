import { Albums } from "./Albums";
import { Concerts } from "./Concerts";
import { Favourite } from "./Favourite";
import { Home } from "./Home";
import { NotFound } from "./NotFound";

function getPathname() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

export function Router() {
  const pathname = getPathname();

  switch (pathname) {
    case "/":
      return <Home />;
    case "/concerts":
      return <Concerts />;
    case "/favourite":
      return <Favourite />;
    case "/favourite/albums":
      return <Albums />;
    default:
      return <NotFound />;
  }
}
