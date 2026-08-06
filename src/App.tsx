import { BestFilterProvider } from "./bestFilterContext";
import { assetUrls } from "./assetUrls";
import AppLayout from "./components/AppLayout";
import { HeroHeading } from "./components/HeroHeading";
import Photos from "./components/Photos";
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
    <BestFilterProvider>
      <AppLayout>
        <SiteHeader links={headerLinks} />
        <HeroHeading prefix="by" title="Yura Shambora" />
        <Photos />
      </AppLayout>
    </BestFilterProvider>
  );
}

export default App;
