import { createTheme, adaptV4Theme } from "@mui/material";
import customBreakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";
import overrides from "./overrides";
import props from "./props";

export const theme = createTheme({
  breakpoints: customBreakpoints.breakpoints,
  palette: palette,
  typography,
  spacing: 4,
  overrides,
  props,
});
