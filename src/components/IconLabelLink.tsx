import { Box, Link, Typography } from "@mui/material";

export interface IIconLabelLinkProps {
  href: string;
  iconSrc: string;
  label: string;
  external?: boolean;
}

export function IconLabelLink(props: IIconLabelLinkProps) {
  const { href, iconSrc, label, external } = props;

  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      underline="none"
      color="inherit"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.75,
        "&:hover": { textDecoration: "underline" },
      }}
    >
      <Box
        component="img"
        src={iconSrc}
        alt=""
        aria-hidden
        sx={{ width: 14, height: 14, display: "block" }}
      />
      <Typography variant="body1">{label}</Typography>
    </Link>
  );
}
