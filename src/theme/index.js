import { createTheme } from "@mui/material/styles";
import customBreakpoints from "./breakpoints";
import customPalette from "./palette";
import typography from "./typography";
import spacing from "./spacing";
import overrides from "./overrides";
import props from "./props";
console.log(typography);
export const theme = createTheme({
  breakpoints: customBreakpoints.breakpoints,
  palette: {
    primary: {
      light: "#e3364e",
      main: "#D23F57",
      contrastText: "#fff",
      dark: "#b00e29",
    },
    secondary: {
      light: "#b6d4f0",
      main: "#203345",
      contrastText: "#F6F9FC",
      dark: "#15314d",
    },
    textSecondary: {
      main: "#7D879C",
    },
    text: {
      secondary: "#AEB4BE",
    },
    action: {
      hover: "#e3364e",
    },
  },

  typography,
  spacing: 4,
  overrides,
  props,
});
