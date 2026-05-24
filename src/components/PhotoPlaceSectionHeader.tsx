import { Box, Collapse, Divider, Typography } from "@mui/material";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";

export type PhotoPlaceSectionHeaderVariant = "city" | "placeEntry";

export interface IPhotoPlaceSectionHeaderProps {
  variant: PhotoPlaceSectionHeaderVariant;
  title: string;
  month?: string;
  info?: string;
  subtitle?: string;
  photosCollapsed?: boolean;
  photosRegionId?: string;
  onTitleKeyDown?: (event: ReactKeyboardEvent) => void;
  onToggleCollapsed?: () => void;
}

export function PhotoPlaceSectionHeader(props: IPhotoPlaceSectionHeaderProps) {
  const {
    variant,
    title,
    month,
    info,
    subtitle,
    photosCollapsed,
    photosRegionId,
    onTitleKeyDown,
    onToggleCollapsed,
  } = props;

  if (variant === "placeEntry") {
    return (
      <Typography
        variant="body1"
        component="div"
        sx={{
          position: "sticky",
          top: 50,
          m: 0,
          ml: { xs: 1.5, sm: 2.25 },
          width: "fit-content",
          px: 1,
          mb: -1,
          zIndex: 1,
          backdropFilter: "blur(5px)",
          transition: "all 0.3s ease-in-out",
          ":hover": {
            backdropFilter: "blur(20px)",
          },
        }}
      >
        <Box
          aria-controls={photosRegionId!}
          aria-expanded={!photosCollapsed}
          onClick={onToggleCollapsed!}
          onKeyDown={onTitleKeyDown!}
          role="button"
          sx={{
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          tabIndex={0}
        >
          ▪{" "}
          {month ? (
            <Box component="span" sx={{ fontWeight: 700 }}>
              {month}
            </Box>
          ) : null}
          {month && info ? " / " : null}
          {info ? <Box component="span">{info}</Box> : null}
        </Box>
      </Typography>
    );
  }

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
          fontWeight="bold"
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
