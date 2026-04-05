import { Box } from "@mui/material";
import { assetUrls } from "../assetUrls";

export interface ISiteLogoProps {
  src?: string;
  alt?: string;
}

export function SiteLogo(props: ISiteLogoProps) {
  const { src = assetUrls.logo, alt = "Logo" } = props;

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{ height: 36, width: "auto", display: "block" }}
    />
  );
}
