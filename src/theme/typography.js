import palette from "./palette";
import customBreakpoints from "./breakpoints";
import customSpacing from "./spacing";

const typography = {
  fontFamily: [
    "Lato",
    "Roboto",
    "Arial",
    "Open Sans",
    "TitilliumWeb",
    "Righteous",
  ].join(","),
  h1: {
    fontSize: "2.6rem",
    color: palette.primary.main,
    fontWeight: 600,
    lineHeight: "3.1rem",
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: "Righteous cursive",
  },
  h2: {
    fontSize: "2.1rem",
    color: palette.secondary.main,
    fontWeight: "bold",
    padding: customSpacing.spacing(4, 2),
    [customBreakpoints.breakpoints.up("xs")]: {
      fontSize: "1.8rem",
    },
    [customBreakpoints.breakpoints.up("md")]: {
      fontSize: "1.6rem",
    },
  },
  h3: {
    fontSize: "1.6rem",
    color: palette.secondary.contrastText,
    fontFamily: "Righteous, Lato, Roboto",
    textAlign: "center",
    padding: customSpacing.spacing(4, 0),
    [customBreakpoints.breakpoints.up("md")]: {
      fontSize: "1.4rem",
    },
  },
  h4: {
    fontSize: "1.2rem",
    [customBreakpoints.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
  h5: {
    color: palette.secondary.main,
    fontWeight: "bold",
    fontSize: "1rem",
  },
  body1: {
    fontSize: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
  },
  subtitle2: {
    fontSize: "1rem",
    fontWeight: 400,
    color: palette.secondary.main,
  },
};

export default typography;
