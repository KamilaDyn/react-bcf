import { createTheme } from "@mui/material/styles";
import customBreakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";

export const theme = createTheme({
  breakpoints: customBreakpoints.breakpoints,
  palette,
  overrides,
  typography,
  spacing: 4,
});
