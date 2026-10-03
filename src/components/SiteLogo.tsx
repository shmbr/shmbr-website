import { Box, Link } from "@mui/material";
import { assetUrls } from "../assetUrls";

export interface ISiteLogoProps {
  alt?: string;
  plain?: boolean;
  src?: string;
}

export function SiteLogo(props: ISiteLogoProps) {
  const { alt = "shmbr", plain = false, src } = props;
  const logoSrc = src ?? (plain ? assetUrls.logoMark : assetUrls.logo);

  return (
    <Link
      href="/"
      aria-label="Home"
      underline="none"
      sx={{ display: "block", lineHeight: 0 }}
    >
      <Box
        component="img"
        src={logoSrc}
        alt={alt}
        sx={{
          display: "block",
          height: plain ? { xs: 28, md: 32 } : { xs: 28, md: 36 },
          width: "auto",
        }}
      />
    </Link>
  );
}
