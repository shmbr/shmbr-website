import { Box } from "@mui/material";
import type { ReactNode } from "react";

import { assetUrls } from "../assetUrls";
import { CONTACT_EMAIL, GITHUB_URL, INSTAGRAM_URL } from "../contact";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader, type ISiteHeaderLink } from "./SiteHeader";

export const DEFAULT_HEADER_LINKS: ISiteHeaderLink[] = [
  {
    href: `mailto:${CONTACT_EMAIL}`,
    iconSrc: assetUrls.mailIcon,
    label: CONTACT_EMAIL,
  },
  {
    href: GITHUB_URL,
    iconSrc: assetUrls.githubIcon,
    label: "shmbr",
    external: true,
  },
  {
    href: INSTAGRAM_URL,
    iconSrc: assetUrls.instagramIcon,
    label: "_shmbr",
    external: true,
  },
];

export interface IAppLayoutProps {
  children: ReactNode;
  headerLinks?: ISiteHeaderLink[];
  showFooter?: boolean;
  showHeader?: boolean;
}

function AppLayout(props: IAppLayoutProps) {
  const {
    children,
    headerLinks = DEFAULT_HEADER_LINKS,
    showFooter = true,
    showHeader = true,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 1300,
        minHeight: "100vh",
        mx: "auto",
        px: 2,
        py: 2,
      }}
    >
      {showHeader ? <SiteHeader links={headerLinks} /> : null}
      <Box
        component="main"
        sx={{ display: "flex", flex: 1, flexDirection: "column" }}
      >
        {children}
      </Box>
      {showFooter ? <SiteFooter /> : null}
    </Box>
  );
}

export default AppLayout;
