import { Box, Typography } from "@mui/material";

export interface IPhotoPlaceDividerProps {
  label?: string;
  nested?: boolean;
}

export function PhotoPlaceDivider(props: IPhotoPlaceDividerProps) {
  const { label, nested = false } = props;

  return (
    <Box
      aria-hidden={!label}
      role={label ? undefined : "presentation"}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        ml: nested ? 0 : { xs: 0, sm: 3, md: 3.75 },
        pt: 2,
      }}
    >
      <Box
        component="span"
        sx={{
          flex: 1,
          borderBottom: "2px dashed",
          borderColor: "#bbb",
          minWidth: 0,
        }}
      />
      {label ? (
        <Typography
          color="#bbb"
          component="span"
          sx={{
            flexShrink: 0,
            fontFamily: "inherit",
            fontSize: "inherit",
          }}
          variant="caption"
        >
          {label}
        </Typography>
      ) : null}
    </Box>
  );
}
