import { Box } from "@mui/material";
import type { ReactNode } from "react";

export interface IAppLayoutProps {
  children: ReactNode;
}

function AppLayout(props: IAppLayoutProps) {
  const { children } = props;

  return (
    <Box component="main" sx={{ maxWidth: 1300, mx: "auto", py: 2, px: 2 }}>
      {children}
    </Box>
  );
}

export default AppLayout;
