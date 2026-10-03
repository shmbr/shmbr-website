import { BestFilterProvider } from "../bestFilterContext";
import { GITHUB_URL } from "../contact";
import AppLayout, { DEFAULT_HEADER_LINKS } from "./AppLayout";
import { HeroHeading } from "./HeroHeading";
import Photos from "./Photos";

const PHOTOS_HEADER_LINKS = DEFAULT_HEADER_LINKS.filter(
  (link) => link.href !== GITHUB_URL,
);

export function Home() {
  return (
    <BestFilterProvider>
      <AppLayout headerLinks={PHOTOS_HEADER_LINKS} showFooter={false}>
        <HeroHeading prefix="by" title="Yura Shambora" />
        <Photos />
      </AppLayout>
    </BestFilterProvider>
  );
}
