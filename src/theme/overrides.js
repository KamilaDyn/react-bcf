import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";

const overrides = {
  MuiButton: {
    text: {
      backgroundColor: palette.primary.light,
      color: palette.primary.main,
      minWidth: 40,
      height: 40,
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      fontSize: typography.fontSize.xs,
      transition: ".3s",
      [breakpoints.up("md")]: {
        minWidth: 50,
        height: 50,
        fontSize: typography.fontSize.s,
      },
      "&:hover": {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
      },
    },
  },
};

export default overrides;
