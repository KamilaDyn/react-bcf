import { createTheme } from "@material-ui/core";
import palette from "./palette";

const typography = createTheme({
  fontFamily: '"Lato","Roboto", Arial, Open Sans, "TitilliumWeb"',
  fontSize: {
    xxs: "1rem",
    xs: "1.2rem",
    s: "1.6rem",
    m: "2.1rem",
    l: "2.4rem",
    xl: "4rem",
  },
  h1: {
    fontSize: "2.1rem",
    color: palette.primary.main,
    fontWeight: 600,
    lineHeight: "50px",
    textTransform: "uppercase",
    textAlign: "center",
  },
  h2: {
    fontSize: "1.8rem",
    color: palette.secondary.main,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
  },
  subtitle2: {
    fontSize: "1rem",
    fontWeight: 400,
    padding: "0 10px",
  },
});

export default typography;
