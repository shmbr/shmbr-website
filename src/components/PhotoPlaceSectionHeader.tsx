import { Box, Collapse, Divider, Typography } from "@mui/material";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

export interface IPhotoPlaceSectionHeaderProps {
  title: string;
  subtitle?: string;
  photosCollapsed: boolean;
  photosRegionId: string;
  onTitleKeyDown: (event: ReactKeyboardEvent) => void;
  onToggleCollapsed: () => void;
}

export function PhotoPlaceSectionHeader(props: IPhotoPlaceSectionHeaderProps) {
  const {
    title,
    subtitle,
    photosCollapsed,
    photosRegionId,
    onTitleKeyDown,
    onToggleCollapsed,
  } = props;

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "background.default",
          pb: 1,
          zIndex: 2,
          background: "#fafafa",
        }}
      >
        <Typography variant="h4" component="h4" sx={{ m: 0 }}>
          <Box
            aria-controls={photosRegionId}
            aria-expanded={!photosCollapsed}
            onClick={onToggleCollapsed}
            onKeyDown={onTitleKeyDown}
            role="button"
            sx={{
              fontWeight: 700,
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            tabIndex={0}
          >
            {title}
          </Box>
        </Typography>
        <Divider
          flexItem
          sx={{ borderColor: "black", borderWidth: "2px", maxWidth: 390 }}
        />
      </Box>
      <Collapse in={!photosCollapsed} timeout={750}>
        <Typography
          fontWeight={"bold"}
          variant="caption"
          color="#bbb"
          sx={{ position: "relative", top: "-8px" }}
        >
          {subtitle}
        </Typography>
      </Collapse>
    </>
  );
}
