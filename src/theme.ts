import { createTheme } from "@mui/material/styles";

const fontCourier = '"Courier Prime", Courier, "Courier New", monospace';
const fontAmatic = '"Amatic SC", cursive';

const xsDown = "@media (max-width:600px)";

/** Typography quick overview (px). xs = ≤600px. */
// variant     | md+  | xs  | font     | usage
// h1          | 120  | 90  | Amatic   | hero title
// h2          |  80  | 60  | Amatic   | hero prefix, year
// h4          |  36  | 28  | Courier  | place section title
// subtitle1   |  28  | 22  | Courier  | equipment list
// body1       |  18  | 16  | Courier  | nav links
// caption     |  14  | 12  | Courier  | photo count

const fontSizes = {
  h1: { md: 120, xs: 90 },
  h2: { md: 80, xs: 60 },
  h4: { md: 36, xs: 28 },
  subtitle1: { md: 28, xs: 22 },
  body1: { md: 18, xs: 16 },
  caption: { md: 14, xs: 12 },
} as const;

export const theme = createTheme({
  palette: {
    background: {
      default: "#fafafa",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#555555",
    },
    primary: {
      main: "#FFD500",
      contrastText: "#1a1a1a",
    },
  },
  typography: {
    fontFamily: fontCourier,
    body1: {
      fontFamily: fontCourier,
      fontSize: fontSizes.body1.md,
      lineHeight: 1.5,
      [xsDown]: {
        fontSize: fontSizes.body1.xs,
      },
    },
    caption: {
      fontFamily: fontCourier,
      fontSize: fontSizes.caption.md,
      lineHeight: 1.4,
      [xsDown]: {
        fontSize: fontSizes.caption.xs,
      },
    },
    subtitle1: {
      fontFamily: fontCourier,
      fontSize: fontSizes.subtitle1.md,
      lineHeight: 1.35,
      [xsDown]: {
        fontSize: fontSizes.subtitle1.xs,
      },
    },
    h4: {
      fontFamily: fontCourier,
      fontSize: fontSizes.h4.md,
      fontWeight: 400,
      lineHeight: 1.2,
      [xsDown]: {
        fontSize: fontSizes.h4.xs,
      },
    },
    h1: {
      fontFamily: fontAmatic,
      fontSize: fontSizes.h1.md,
      fontWeight: 700,
      lineHeight: 1.05,
      [xsDown]: {
        fontSize: fontSizes.h1.xs,
      },
    },
    h2: {
      fontFamily: fontAmatic,
      fontSize: fontSizes.h2.md,
      fontWeight: 700,
      lineHeight: 1.1,
      [xsDown]: {
        fontSize: fontSizes.h2.xs,
      },
    },
  },
});
