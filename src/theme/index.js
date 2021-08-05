import { createTheme } from "@material-ui/core";
import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";
import overrides from "./overrides";

export const theme = createTheme({
  breakpoints,
  palette,
  typography,
  spacing,
  overrides,
});
