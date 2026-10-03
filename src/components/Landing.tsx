import { useEffect } from "react";
import { Box, Link, Typography } from "@mui/material";
import type { ReactNode } from "react";

import {
  CONTACT_EMAIL,
  GITHUB_URL,
  INSTAGRAM_URL,
  TELEGRAM_URL,
} from "../contact";
import AppLayout, { DEFAULT_HEADER_LINKS } from "./AppLayout";

interface IBulletLinkProps {
  children: ReactNode;
  href: string;
  underline?: "always" | "hover" | "none";
}

const LANDING_HEADER_LINKS = DEFAULT_HEADER_LINKS.filter(
  (link) => link.href !== INSTAGRAM_URL,
);

const listSx = {
  listStyleType: "square",
  m: 0,
  ml: 1.5,
  mt: "-6px",
  pl: 2.75,
  "& li": {
    pl: 0.25,
    lineHeight: 1.1,
  },
} as const;

function BulletLink(props: IBulletLinkProps) {
  const { children, href, underline = "always" } = props;
  const external = href.startsWith("http");

  return (
    <Link
      color="inherit"
      href={href}
      underline="none"
      {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
      sx={{
        "&:hover": { textDecoration: "underline" },
        textDecoration: underline === "always" ? "underline" : "none",
      }}
    >
      {children}
    </Link>
  );
}

export function Landing() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) {
      return;
    }

    document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <AppLayout headerLinks={LANDING_HEADER_LINKS}>
      <Typography
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          fontWeight: 400,
          fontSize: 20,
          mt: { xs: 8, md: 14.5 },
          mb: 2,
          "& p": { m: 0 },
          "& br": {
            "@media (max-width:1050px)": {
              display: "none",
            },
          },
        }}
        variant="body1"
      >
        <p>
          hi, i'm <b>Yura</b>, and i'm doing a bunch of cool stuff
        </p>
        <Box component="ul" sx={listSx}>
          <li>
            <BulletLink href={GITHUB_URL} underline="hover">
              software 🤖
            </BulletLink>
          </li>
          <li>
            <BulletLink href="/404" underline="hover">
              music 🎸
            </BulletLink>
          </li>
          <li>
            <BulletLink href="/photos" underline="hover">
              photos 📷
            </BulletLink>
          </li>
          <Box component="li">...</Box>
        </Box>
        &nbsp;
        <Box>
          <p>you can reach me out:</p>
          <Box component="ul" sx={listSx}>
            <li>
              <BulletLink href={TELEGRAM_URL}>tg</BulletLink>
            </li>
            <li>
              <BulletLink href={`mailto:${CONTACT_EMAIL}`}>mail</BulletLink>
            </li>
            <li>
              <BulletLink href={INSTAGRAM_URL}>instagram</BulletLink>
            </li>
          </Box>
        </Box>
        &nbsp;
        <Box>
          <p>list of thing i could do for you:</p>
          <Box component="ul" sx={listSx}>
            <Box component="li" id="it" sx={{ scrollMarginTop: 24 }}>
              <b>it</b>
              {" – "}
              years of commercial experience developing websites, custom CRM
              systems and <br /> other business solutions. Full cycle,
              idea/ui-ux/implementation and so on...
            </Box>
            <li>
              <b>music</b>
              {" – "}
              guitar player – share gears, helps with recording, jam, play in a
              band, <br /> discuss music, sound and engineering behind it. Help
              with building pedalboard
            </li>
            <li>
              <b>photoshoots</b>
              {" – "}
              mostly for friends
            </li>
            <Box component="li">...</Box>
          </Box>
        </Box>
      </Typography>
    </AppLayout>
  );
}
