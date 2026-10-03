import { Box, Link, Typography } from "@mui/material";
import { SiteLogo } from "./SiteLogo";

interface IFooterLink {
  disabled?: boolean;
  href?: string;
  label: string;
}

interface IFooterLinkProps {
  link: IFooterLink;
}

const FOOTER_LINKS: IFooterLink[] = [
  { href: "/photos", label: "photos" },
  { href: "/favourite", label: "favourite" },
  { href: "/ui", label: "ui-library" },
  { href: "/404", label: "404" },
];

function FooterLink(props: IFooterLinkProps) {
  const { link } = props;

  if (link.disabled) {
    return (
      <Typography
        aria-disabled="true"
        component="span"
        fontStyle="italic"
        variant="body2"
        sx={{ color: "#bbb", textDecoration: "underline" }}
      >
        {link.label}
      </Typography>
    );
  }

  return (
    <Link
      color="inherit"
      href={link.href}
      underline="none"
      variant="body2"
      fontStyle={"italic"}
      sx={{
        "&:hover": { textDecoration: "underline" },
        textDecoration: "underline",
      }}
    >
      {link.label}
    </Link>
  );
}

export function SiteFooter() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "text.primary",
          mt: { xs: 8, md: 16 },
          pb: 0,
          pt: 1,
        }}
      >
        <Box
          sx={{
            position: "relative",
            alignItems: { xs: "flex-start", md: "center" },
            display: "flex",
            flexDirection: { xs: "row", md: "row" },
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: { xs: 6, md: 1 },
            rowGap: { xs: 4, md: 1 },
            mt: 2,
            mb: 2,
          }}
        >
          <Box width={100} mr={"auto"}>
            <Typography variant="body2" fontWeight={700}>
              shmbr.xyz
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
              opacity: 0.1,
              mt: "-4px",
              pointerEvents: "none",
            }}
          >
            <SiteLogo plain />
          </Box>

          <Typography
            variant="body2"
            sx={{ opacity: 0.3, display: { xs: "none", sm: "block" } }}
          >
            pls don't steal this website
          </Typography>

          <Box width={100} ml={"auto"}>
            <Typography variant="body2" textAlign={"right"} fontWeight={700}>
              © 2026
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={0.5}
          sx={{ mt: 4, mb: 2 }}
        >
          {FOOTER_LINKS.map((link) => (
            <FooterLink key={link.label} link={link} />
          ))}
        </Box>
      </Box>
    </>
  );
}
