import { createTheme } from "@mui/material";

const customBreakpoints = createTheme({
  breakpoints: {
    values: {
      xxs: 320,
      xs: 470,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1420,
      xxl: 1920,
    },
  },
});

export default customBreakpoints;
