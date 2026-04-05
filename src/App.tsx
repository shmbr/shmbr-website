import { assetUrls } from "./assetUrls";
import AppLayout from "./components/AppLayout";
import { HeroHeading } from "./components/HeroHeading";
import { SiteHeader, type ISiteHeaderLink } from "./components/SiteHeader";

const headerLinks: ISiteHeaderLink[] = [
  {
    href: "mailto:ura.shambora@gmail.com",
    iconSrc: assetUrls.mailIcon,
    label: "ura.shambora@gmail.com",
  },
  {
    href: "https://www.instagram.com/_shmbr/",
    iconSrc: assetUrls.instagramIcon,
    label: "_shmbr",
    external: true,
  },
];

function App() {
  return (
    <AppLayout>
      <SiteHeader links={headerLinks} />
      <HeroHeading prefix="by" title="Yura Shambora" />
    </AppLayout>
  );
}

export default App;
