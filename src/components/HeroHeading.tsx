import { Box, Typography } from "@mui/material";

export interface IHeroHeadingProps {
  prefix: string;
  title: string;
}

export function HeroHeading(props: IHeroHeadingProps) {
  const { prefix, title } = props;

  return (
    <>
      <Box display="flex" alignItems="baseline" gap={3} sx={{ mt: 18 }}>
        <Typography variant="h2">{prefix}</Typography>
        <Typography variant="h1">{title}</Typography>
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 3, ml: 7.25 }}>
        <li>iphone 12 mini</li>
        <li>iphone 17</li>
        <li>fujifilm xe 3</li>
      </Typography>
    </>
  );
}
