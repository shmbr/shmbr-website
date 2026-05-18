import { Box } from "@mui/material";
import { IconLabelLink } from "./IconLabelLink";
import { SiteLogo } from "./SiteLogo";

export interface ISiteHeaderLink {
  href: string;
  iconSrc: string;
  label: string;
  external?: boolean;
}

export interface ISiteHeaderProps {
  links: ISiteHeaderLink[];
}

export function SiteHeader(props: ISiteHeaderProps) {
  const { links } = props;

  return (
    <Box
      display="flex"
      justifyContent={{ xs: "center", sm: "space-between" }}
      alignItems="center"
      flexWrap="wrap"
      gap={2}
    >
      <SiteLogo />
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        gap={3}
        rowGap={0.5}
        sx={{
          justifyContent: { xs: "center", sm: "right" },
          mr: { xs: 1, sm: 0 },
        }}
      >
        {links.map((link) => (
          <IconLabelLink
            key={link.href}
            href={link.href}
            iconSrc={link.iconSrc}
            label={link.label}
            external={link.external}
          />
        ))}
      </Box>
    </Box>
  );
}
