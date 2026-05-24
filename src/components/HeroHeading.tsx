import { Box, Divider, Typography } from "@mui/material";

export interface IHeroHeadingProps {
  prefix: string;
  title: string;
}

const EQUIPMENT = {
  current: ["fujifilm xe 3", "iphone 17"],
  old: ["iphone 12 mini", "iphone 6s"],
};

export function HeroHeading(props: IHeroHeadingProps) {
  const { prefix, title } = props;

  return (
    <>
      <Box
        display="flex"
        alignItems="baseline"
        gap={3}
        sx={{ mt: { xs: 8, md: 10 } }}
      >
        <Typography variant="h2">{prefix}</Typography>
        <Typography variant="h1">{title}</Typography>
      </Box>

      <Typography
        variant="subtitle1"
        component="ul"
        sx={{ mt: 3, ml: 7.25, width: "fit-content" }}
      >
        {EQUIPMENT.current.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}
        <Divider sx={{ borderColor: "black", borderWidth: "1px", ml: -3 }} />

        {EQUIPMENT.old.length > 0 && (
          <>
            {EQUIPMENT.old.map((equipment) => (
              <li key={equipment} style={{ color: "#bbb" }}>
                {equipment}
              </li>
            ))}
          </>
        )}
      </Typography>
    </>
  );
}
