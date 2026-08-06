import { Box, Link, Typography } from "@mui/material";
import { Check } from "lucide-react";

import { useBestFilter } from "../bestFilterContext";

const FILTER_OPTIONS = [
  { label: "all", value: false },
  { label: "best", value: true },
] as const;

const linkButtonSx = {
  alignItems: "center",
  background: "none",
  border: 0,
  cursor: "pointer",
  display: "grid",
  font: "inherit",
  gap: 1.5,
  gridTemplateColumns: "1fr 12px",
  p: 0,
  textTransform: "lowercase" as const,
  "&:hover .best-filter-label": { textDecoration: "underline" },
};

export function BestFilterToggle() {
  const { showBestOnly, setBestFilter } = useBestFilter();

  return (
    <Box
      aria-label="Photo filter"
      component="nav"
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      gap={0.5}
      role="radiogroup"
      sx={{ flexShrink: 0, pt: 0.5 }}
    >
      {FILTER_OPTIONS.map((option) => {
        const isActive = showBestOnly === option.value;

        return (
          <Link
            key={option.label}
            aria-checked={isActive}
            color="inherit"
            component="button"
            onClick={() => setBestFilter(option.value)}
            role="radio"
            underline="none"
            sx={{
              ...linkButtonSx,
              color: isActive ? "text.primary" : "text.secondary",
              width: "100%",
            }}
          >
            <Typography
              className="best-filter-label"
              component="span"
              sx={{ textAlign: "right" }}
              variant="body1"
            >
              {option.label}
            </Typography>
            <Box
              aria-hidden
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                width: 12,
              }}
            >
              {isActive ? <Check size={12} strokeWidth={2} /> : null}
            </Box>
          </Link>
        );
      })}
    </Box>
  );
}
