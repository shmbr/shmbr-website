import { BestFilterProvider } from "../bestFilterContext";
import { assetUrls } from "../assetUrls";
import { CONTACT_EMAIL } from "../contact";
import AppLayout from "./AppLayout";
import { HeroHeading } from "./HeroHeading";
import Photos from "./Photos";
import { SiteHeader, type ISiteHeaderLink } from "./SiteHeader";

const headerLinks: ISiteHeaderLink[] = [
  {
    href: `mailto:${CONTACT_EMAIL}`,
    iconSrc: assetUrls.mailIcon,
    label: CONTACT_EMAIL,
  },
  {
    href: "https://www.instagram.com/_shmbr/",
    iconSrc: assetUrls.instagramIcon,
    label: "_shmbr",
    external: true,
  },
];

export function Home() {
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
