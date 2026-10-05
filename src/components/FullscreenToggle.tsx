import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Maximize2, Minimize2 } from "lucide-react";

function readFullscreenActive(): boolean {
  return document.fullscreenElement !== null;
}

export function FullscreenToggle() {
  const [active, setActive] = useState(readFullscreenActive);

  useEffect(() => {
    const sync = () => {
      setActive(readFullscreenActive());
    };

    document.addEventListener("fullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
    };
  }, []);

  const handleClick = () => {
    if (readFullscreenActive()) {
      void document.exitFullscreen();
      return;
    }

    void document.documentElement.requestFullscreen().catch(() => {});
  };

  if (!document.fullscreenEnabled) {
    return null;
  }

  const label = active ? "exit full screen" : "full screen";

  return (
    <Box
      aria-label={label}
      aria-pressed={active}
      component="button"
      onClick={handleClick}
      title={label}
      type="button"
      sx={{
        alignItems: "center",
        background: "none",
        border: 0,
        color: "inherit",
        cursor: "pointer",
        display: "flex",
        p: 0,
        "&:hover": { color: "text.secondary" },
      }}
    >
      {active ? (
        <Minimize2 aria-hidden size={12} strokeWidth={2} />
      ) : (
        <Maximize2 aria-hidden size={12} strokeWidth={2} />
      )}
    </Box>
  );
}
