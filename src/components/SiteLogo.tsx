import { Box, Link } from "@mui/material";
import { assetUrls } from "../assetUrls";

export interface ISiteLogoProps {
  src?: string;
  alt?: string;
}

export function SiteLogo(props: ISiteLogoProps) {
  const { src = assetUrls.logo, alt = "Logo" } = props;

  return (
    <Link
      href="/"
      aria-label="Home"
      underline="none"
      sx={{ display: "block", lineHeight: 0 }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{ height: { xs: 28, md: 36 }, width: "auto", display: "block" }}
      />
    </Link>
  );
}
