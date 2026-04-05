import { Box, Typography } from "@mui/material";

export interface IHeroHeadingProps {
  prefix: string;
  title: string;
}

const EQUIPMENT = [
  // "iphone 6s",
  // "iphone 12 mini",
  "iphone 17",
  "fujifilm xe 3",
];

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

      <Typography variant="subtitle1" sx={{ mt: 3, ml: 7.25 }}>
        {EQUIPMENT.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}
      </Typography>
    </>
  );
}
