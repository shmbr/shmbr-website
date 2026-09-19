import { Concerts } from "./Concerts";
import { Home } from "./Home";

function getPathname() {
  return window.location.pathname.replace(/\/+$/, "") || "/";
}

export function Router() {
  const pathname = getPathname();

  switch (pathname) {
    case "/concerts":
      return <Concerts />;
    default:
      return <Home />;
  }
}
