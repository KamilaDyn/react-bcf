import { createTheme } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";
import overrides from "./overrides";

export const theme = createTheme({ palette, typography, spacing, overrides });
