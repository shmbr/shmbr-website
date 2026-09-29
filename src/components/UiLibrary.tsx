import {
  useEffect,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { Box, Collapse, Divider, Link, Typography } from "@mui/material";

import { assetUrls } from "../assetUrls";
import { BestFilterProvider } from "../bestFilterContext";
import { CONTACT_EMAIL } from "../contact";
import { theme } from "../theme";
import AppLayout from "./AppLayout";
import { BestFilterToggle } from "./BestFilterToggle";
import { HeroHeading } from "./HeroHeading";
import { IconLabelLink } from "./IconLabelLink";
import { PageEndNav } from "./PageEndNav";
import { PageHeading } from "./PageHeading";
import { PhotoPlaceDivider } from "./PhotoPlaceDivider";
import { PhotoPlaceSectionHeader } from "./PhotoPlaceSectionHeader";
import { SiteHeader, type ISiteHeaderLink } from "./SiteHeader";
import { SiteLogo } from "./SiteLogo";

const SECTIONS = [
  { id: "type", label: "type" },
  { id: "color", label: "color" },
  { id: "links", label: "links" },
  { id: "buttons", label: "buttons" },
  { id: "headers", label: "headers" },
  { id: "rules", label: "rules" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

const SCROLL_MARGIN = 88;

const HEADER_LINKS: ISiteHeaderLink[] = [
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

const COLORS = [
  { name: "paper", value: "#fafafa", ink: "#1a1a1a" },
  { name: "ink", value: "#1a1a1a", ink: "#fafafa" },
  { name: "secondary", value: "#555555", ink: "#fafafa" },
  { name: "yellow", value: "#FFD500", ink: "#1a1a1a" },
  { name: "mute", value: "#bbbbbb", ink: "#1a1a1a" },
  { name: "line", value: "#dddddd", ink: "#1a1a1a" },
] as const;

interface ITypeSample {
  variant: "h1" | "h2" | "h4" | "subtitle1" | "body1" | "caption";
  sample: string;
  role: string;
}

const TYPE_SAMPLES: ITypeSample[] = [
  { variant: "h1", sample: "Lorem ipsum", role: "hero title" },
  { variant: "h2", sample: "-2024", role: "hero prefix, year" },
  { variant: "h4", sample: "berlin", role: "place section title" },
  { variant: "subtitle1", sample: "fujifilm xe 3", role: "equipment list" },
  { variant: "body1", sample: "reach out", role: "nav links" },
  { variant: "caption", sample: "24 photos", role: "photo count" },
];

const PLACE_FRAMES = [
  "frame 01",
  "frame 02",
  "frame 03",
  "frame 04",
  "frame 05",
];

interface ISpecimenProps {
  name: string;
  note?: string;
  children: ReactNode;
}

interface ISectionTitleProps {
  id: SectionId;
  label: string;
}

interface ISectionNavProps {
  activeId: SectionId;
}

interface IColorSwatchProps {
  name: string;
  value: string;
  ink: string;
}

interface INavCardSpecimenProps {
  href?: string;
  title: string;
}

function fontLabel(variant: ITypeSample["variant"]) {
  const style = theme.typography[variant];
  const family = String(style.fontFamily ?? theme.typography.fontFamily)
    .split(",")[0]
    .replaceAll('"', "")
    .trim();
  const size =
    typeof style.fontSize === "number"
      ? `${style.fontSize}px`
      : String(style.fontSize);

  return `${size} · ${family}`;
}

function toggleOnKey(event: ReactKeyboardEvent, toggle: () => void) {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  event.preventDefault();
  toggle();
}

function useActiveSection() {
  const [activeId, setActiveId] = useState<SectionId>("type");

  useEffect(() => {
    const nodes = SECTIONS.map((section) =>
      document.getElementById(section.id),
    ).filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting);
        if (intersecting.length === 0) {
          return;
        }

        const closest = intersecting.reduce((best, entry) => {
          const line = SCROLL_MARGIN;
          const distance = Math.abs(entry.boundingClientRect.top - line);
          const bestDistance = Math.abs(best.boundingClientRect.top - line);
          return distance < bestDistance ? entry : best;
        });

        const id = closest.target.id;
        if (SECTIONS.some((section) => section.id === id)) {
          setActiveId(id as SectionId);
        }
      },
      { rootMargin: "-12% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return activeId;
}

function Specimen(props: ISpecimenProps) {
  const { name, note, children } = props;

  return (
    <Box sx={{ py: { xs: 3, md: 4 } }}>
      <Box
        sx={{
          alignItems: "baseline",
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 2.5,
        }}
      >
        <Typography color="text.secondary" variant="caption">
          ▪ {name}
        </Typography>
        {note ? (
          <Typography color="#bbb" variant="caption">
            {note}
          </Typography>
        ) : null}
      </Box>
      {children}
    </Box>
  );
}

function SectionTitle(props: ISectionTitleProps) {
  const { id, label } = props;

  return (
    <Typography
      component="h2"
      id={id}
      variant="h4"
      sx={{
        fontWeight: 700,
        mb: 1,
        mt: { xs: 6, md: 10 },
        scrollMarginTop: SCROLL_MARGIN,
      }}
    >
      {label}
    </Typography>
  );
}

function SectionNav(props: ISectionNavProps) {
  const { activeId } = props;

  return (
    <Box
      aria-label="UI sections"
      component="nav"
      sx={{
        bgcolor: "background.default",
        borderBottom: "2px solid",
        borderColor: "text.primary",
        display: "flex",
        flexWrap: "wrap",
        gap: { xs: 1.5, md: 2.5 },
        mt: { xs: 3, md: 5 },
        position: "sticky",
        py: 1.5,
        top: 0,
        zIndex: 4,
      }}
    >
      {SECTIONS.map((section) => {
        const isActive = section.id === activeId;

        return (
          <Link
            key={section.id}
            aria-current={isActive ? "location" : undefined}
            color="inherit"
            href={`#${section.id}`}
            underline="none"
            variant="body1"
            sx={{
              bgcolor: isActive ? "primary.main" : "transparent",
              px: 0.75,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {section.label}
          </Link>
        );
      })}
    </Box>
  );
}

function ColorSwatch(props: IColorSwatchProps) {
  const { name, value, ink } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <Box
      aria-label={`Copy ${name} ${value}`}
      component="button"
      type="button"
      onClick={handleCopy}
      sx={{
        bgcolor: value,
        border: "2px solid",
        borderColor: copied ? "text.primary" : "#ddd",
        color: ink,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        font: "inherit",
        justifyContent: "space-between",
        minHeight: { xs: 112, md: 140 },
        p: 2,
        textAlign: "left",
        width: "100%",
        "&:hover": {
          borderColor: "text.primary",
          borderStyle: "dashed",
        },
      }}
    >
      <Typography color="inherit" variant="body1">
        {name}
      </Typography>
      <Typography color="inherit" variant="caption">
        {copied ? "copied" : value}
      </Typography>
    </Box>
  );
}

function NavCardSpecimen(props: INavCardSpecimenProps) {
  const { href, title } = props;
  const isAvailable = Boolean(href);

  return (
    <Box
      {...(href
        ? { component: Link, href, underline: "none" as const }
        : { component: "div" as const, "aria-disabled": true })}
      sx={{
        alignItems: "flex-start",
        bgcolor: isAvailable ? "background.paper" : "transparent",
        border: "2px solid",
        borderColor: isAvailable ? "text.primary" : "#ddd",
        color: isAvailable ? "text.primary" : "#bbb",
        cursor: isAvailable ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        minHeight: { xs: 160, md: 220 },
        p: { xs: 3, md: 4 },
        pointerEvents: isAvailable ? "auto" : "none",
        textDecoration: "none",
        transition: "all 520ms ease",
        "&:hover": isAvailable
          ? {
              bgcolor: "primary.main",
              borderStyle: "dashed",
            }
          : undefined,
      }}
    >
      {title ? <Typography variant="h2">{title}</Typography> : null}
      {isAvailable ? null : (
        <Typography color="inherit" variant="caption">
          todo
        </Typography>
      )}
    </Box>
  );
}

function HeaderPlayground() {
  const [cityCollapsed, setCityCollapsed] = useState(false);
  const [placeCollapsed, setPlaceCollapsed] = useState(false);

  const toggleCity = () => setCityCollapsed((collapsed) => !collapsed);
  const togglePlace = () => setPlaceCollapsed((collapsed) => !collapsed);

  return (
    <Box sx={{ display: "grid", gap: { xs: 3, md: 4 } }}>
      <Box
        aria-label="City header"
        sx={{
          border: "2px dashed",
          borderColor: "#ddd",
          maxHeight: 240,
          overflow: "auto",
          px: 2,
          py: 1,
        }}
      >
        <PhotoPlaceSectionHeader
          onTitleKeyDown={(event) => toggleOnKey(event, toggleCity)}
          onToggleCollapsed={toggleCity}
          photosCollapsed={cityCollapsed}
          photosRegionId="ui-city-photos"
          subtitle="52.52000, 13.40500"
          title="berlin"
          variant="city"
        />
        <Collapse in={!cityCollapsed}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 1.5, py: 2 }}
          >
            {PLACE_FRAMES.map((frame) => (
              <Typography key={frame} color="#bbb" variant="caption">
                {frame}
              </Typography>
            ))}
          </Box>
        </Collapse>
      </Box>

      <Box
        aria-label="Place header"
        sx={{
          border: "2px dashed",
          borderColor: "#ddd",
          maxHeight: 240,
          overflow: "auto",
          px: 2,
          py: 1,
        }}
      >
        <PhotoPlaceSectionHeader
          info="canal"
          month="june"
          onTitleKeyDown={(event) => toggleOnKey(event, togglePlace)}
          onToggleCollapsed={togglePlace}
          photosCollapsed={placeCollapsed}
          photosRegionId="ui-place-photos"
          title="canal"
          variant="placeEntry"
        />
        <Collapse in={!placeCollapsed}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              pt: 3,
              pb: 2,
            }}
          >
            {PLACE_FRAMES.map((frame) => (
              <Typography key={frame} color="#bbb" variant="caption">
                {frame}
              </Typography>
            ))}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}

function UiLibraryPage() {
  const activeId = useActiveSection();

  return (
    <AppLayout>
      <Typography id="top" variant="h1">
        ui
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ maxWidth: 460, mt: 1 }}
        variant="body1"
      >
        a sandbox of the pieces this site is built from. hover, click, copy a
        color.
      </Typography>

      <SectionNav activeId={activeId} />

      <SectionTitle id="type" label="type" />
      <Box>
        {TYPE_SAMPLES.map((sample) => (
          <Box
            key={sample.variant}
            sx={{
              alignItems: "baseline",
              borderBottom: "1px solid",
              borderColor: "#ddd",
              display: "grid",
              gap: { xs: 0.5, md: 3 },
              gridTemplateColumns: { xs: "1fr", md: "220px 1fr" },
              py: { xs: 2, md: 2.5 },
            }}
          >
            <Typography color="text.secondary" variant="caption">
              {sample.variant}
              <Box component="span" sx={{ display: "block" }}>
                {fontLabel(sample.variant)}
              </Box>
              <Box component="span" sx={{ display: "block" }}>
                {sample.role}
              </Box>
            </Typography>
            <Typography variant={sample.variant}>{sample.sample}</Typography>
          </Box>
        ))}
      </Box>
      <Specimen name="aside" note="yellow rule, italic">
        <Typography
          color="text.secondary"
          component="blockquote"
          variant="body1"
          sx={{
            borderColor: "primary.main",
            borderLeft: "3px solid",
            fontStyle: "italic",
            m: 0,
            maxWidth: 320,
            pl: 2,
          }}
        >
          a note in the margin.
          <br />
          still courier, just quieter.
        </Typography>
      </Specimen>

      <SectionTitle id="color" label="color" />
      <Specimen name="palette" note="click a swatch to copy the hex">
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(3, 1fr)" },
          }}
        >
          {COLORS.map((color) => (
            <ColorSwatch
              key={color.name}
              ink={color.ink}
              name={color.name}
              value={color.value}
            />
          ))}
        </Box>
      </Specimen>

      <SectionTitle id="links" label="links" />
      <Specimen name="Link" note="hover, always, none">
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, md: 4 } }}>
          <Link color="inherit" href="#links" underline="hover" variant="body1">
            underline on hover
          </Link>
          <Link
            color="inherit"
            href="#links"
            underline="always"
            variant="body1"
          >
            always underlined
          </Link>
          <Link
            color="inherit"
            href="#links"
            underline="none"
            variant="body1"
            sx={{ "&:hover": { textDecoration: "underline" } }}
          >
            none, then a line
          </Link>
        </Box>
      </Specimen>
      <Specimen
        name="IconLabelLink"
        note="mail stays here, instagram opens out"
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          {HEADER_LINKS.map((link) => (
            <IconLabelLink
              key={link.href}
              external={link.external}
              href={link.href}
              iconSrc={link.iconSrc}
              label={link.label}
            />
          ))}
        </Box>
      </Specimen>

      <SectionTitle id="buttons" label="buttons" />
      <Specimen
        name="BestFilterToggle"
        note="same control as the hero. it updates the url"
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <BestFilterToggle />
        </Box>
      </Specimen>
      <Specimen
        name="nav card"
        note="hover turns it yellow. the empty one stays put"
      >
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2, md: 3 },
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          }}
        >
          <NavCardSpecimen href="/favourite" title="albums" />
          <NavCardSpecimen title="" />
        </Box>
      </Specimen>

      <SectionTitle id="headers" label="headers" />
      <Specimen name="SiteLogo">
        <SiteLogo />
      </Specimen>
      <Specimen name="SiteHeader">
        <SiteHeader links={HEADER_LINKS} />
      </Specimen>
      <Specimen name="PageHeading" note="the prefix is the link">
        <PageHeading href="#top" prefix="ui" title="sandbox" />
      </Specimen>
      <Specimen name="HeroHeading">
        <HeroHeading prefix="by" title="Yura Shambora" />
      </Specimen>
      <Specimen
        name="PhotoPlaceSectionHeader"
        note="click a title. scroll inside the frame"
      >
        <HeaderPlayground />
      </Specimen>

      <SectionTitle id="rules" label="rules" />
      <Specimen name="Divider" note="city title, then the equipment list">
        <Box sx={{ display: "grid", gap: 3, maxWidth: 390 }}>
          <Divider sx={{ borderColor: "black", borderWidth: "2px" }} />
          <Divider sx={{ borderColor: "black", borderWidth: "1px" }} />
        </Box>
      </Specimen>
      <Specimen name="PhotoPlaceDivider">
        <Box sx={{ display: "grid", gap: 2 }}>
          <PhotoPlaceDivider label="walk to the station" />
          <PhotoPlaceDivider />
        </Box>
      </Specimen>
      <Specimen name="PageEndNav">
        <PageEndNav returnHref="/index" />
      </Specimen>
    </AppLayout>
  );
}

export function UiLibrary() {
  return (
    <BestFilterProvider>
      <UiLibraryPage />
    </BestFilterProvider>
  );
}
