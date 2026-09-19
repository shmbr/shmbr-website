import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AnalyticsProvider } from "./AnalyticsProvider";
import App from "./App.tsx";
import "./fonts";
import { theme } from "./theme";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnalyticsProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </AnalyticsProvider>
  </StrictMode>,
);
