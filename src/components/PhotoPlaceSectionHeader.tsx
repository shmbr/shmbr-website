import { Box, Divider, Typography } from "@mui/material";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

export interface IPhotoPlaceSectionHeaderProps {
  name: string;
  photosCollapsed: boolean;
  photosRegionId: string;
  onTitleKeyDown: (event: ReactKeyboardEvent) => void;
  onToggleCollapsed: () => void;
}

export function PhotoPlaceSectionHeader(props: IPhotoPlaceSectionHeaderProps) {
  const {
    name,
    photosCollapsed,
    photosRegionId,
    onTitleKeyDown,
    onToggleCollapsed,
  } = props;

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "background.default",
        pb: 1,
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
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          tabIndex={0}
        >
          {name}
        </Box>
      </Typography>
      <Divider
        flexItem
        sx={{ borderColor: "black", borderWidth: "2px", maxWidth: 390 }}
      />
    </Box>
  );
}
