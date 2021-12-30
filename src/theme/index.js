import { createTheme } from '@mui/material/styles';
import customBreakpoints from './breakpoints';
import palette from './palette';
import typography from './typography';
import components from './overrides';

export const theme = createTheme({
  breakpoints: customBreakpoints.breakpoints,
  palette,
  components,
  typography,
  spacing: 4,
});
