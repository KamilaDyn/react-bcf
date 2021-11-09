// import { createBreakpoints } from '@mui/material/styles';
import { createTheme } from "@mui/material";

// const breakpoints = createBreakpoints({
//   values: {
//     xxs: 320,
//     xs: 470,
//     sm: 600,
//     md: 960,
//     lg: 1280,
//     xl: 1420,
//     xxl: 1920,
//   },
// });

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
