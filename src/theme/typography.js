import palette from "./palette";
import breakpoints from "./breakpoints";
import spacing from "./spacing";

const typography = {
  fontFamily: '"Lato","Roboto", Arial, Open Sans, "TitilliumWeb" ,"Righteous"',
  fontSize: {
    xxs: "1rem",
    xs: "1.2rem",
    s: "1.6rem",
    m: "2.1rem",
    l: "2.4rem",
    xl: "4rem",
  },
  h1: {
    fontSize: "2.4rem",
    color: palette.primary.main,
    fontWeight: 600,
    lineHeight: "50px",
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: "Righteous cursive",
  },
  h2: {
    fontSize: "1.2rem",
    color: palette.secondary.main,
    fontWeight: "bold",
    padding: spacing(4, 2),
    [breakpoints.up("xs")]: {
      fontSize: "1.4rem",
    },
    [breakpoints.up("md")]: {
      fontSize: "1.6rem",
    },
  },
  h3: {
    fontSize: "1.2rem",
    color: palette.secondary.contrastText,
    fontFamily: "Righteous, Lato, Roboto",
    textAlign: "center",
    padding: spacing(4, 0),
    [breakpoints.up("md")]: {
      fontSize: "1.4rem",
    },
  },
  h4: {
    fontSize: "1rem",
    [breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
  },
  h5: {
    color: palette.secondary.main,
    fontWeight: "bold",
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
