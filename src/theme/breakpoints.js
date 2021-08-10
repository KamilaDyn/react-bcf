import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({
  values: {
    xxs: 320,
    xs: 470,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1420,
    xxl: 1920,
  },
});

export default breakpoints;
