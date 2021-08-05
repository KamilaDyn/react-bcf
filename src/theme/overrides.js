import palette from "./palette";
import typography from "./typography";

const overrides = {
  MuiButton: {
    text: {
      backgroundColor: palette.primary.light,
      color: palette.primary.main,
      width: 50,
      height: 50,
      borderRadius: "4px",
      border: "none",
      cursor: "pointer",
      fontSize: typography.fontSize.s,
      transition: ".3s",
      "&:hover": {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
      },
    },
  },
};

export default overrides;
