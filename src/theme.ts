import { createTheme } from "@mui/material/styles";

const fontCourier = '"Courier Prime", "Courier New", Courier, monospace';
const fontAmatic = '"Amatic SC", cursive';

export const theme = createTheme({
  palette: {
    background: {
      default: "#fafafa",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: fontCourier,
    body1: {
      fontFamily: fontCourier,
      fontSize: 18,
      lineHeight: 1.5,
      "@media (max-width:600px)": {
        fontSize: 16,
      },
    },
    subtitle1: {
      fontFamily: fontCourier,
      fontSize: 28,
      lineHeight: 1.35,
      "@media (max-width:600px)": {
        fontSize: 22,
      },
    },
    h4: {
      fontFamily: fontCourier,
      fontSize: 36,
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h1: {
      fontFamily: fontAmatic,
      fontSize: 120,
      fontWeight: 700,
      lineHeight: 1.05,
      "@media (max-width:600px)": {
        fontSize: 90,
      },
    },
    h2: {
      fontFamily: fontAmatic,
      fontSize: 80,
      fontWeight: 700,
      lineHeight: 1.1,
      "@media (max-width:600px)": {
        fontSize: 60,
      },
    },
  },
});
