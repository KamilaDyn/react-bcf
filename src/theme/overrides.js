import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";

const overrides = {
  MuiButton: {
    text: {
      color: palette.primary.main,
      width: 30,
      height: 30,
      border: `1px solid ${palette.primary.main}`,
      minWidth: 0,
      minHeight: 0,
      lineHeight: 0,
      padding: "4px 12px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: typography.fontSize.xxs,
      fontWeight: "bold",
      transition: ".3s",
      [breakpoints.up("md")]: {
        fontSize: typography.fontSize.s,
      },
      "&:hover": {
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
      },
    },
  },
  MuiContainer: {
    root: {
      [breakpoints.up("sm")]: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
      },
    },
  },
  MuiCardHeader: {
    root: {
      minHeight: "120px",
    },
  },
  MuiSvgIcon: {
    root: {
      color: palette.secondary.main,
      fontSize: typography.fontSize.s,
    },
  },
  MuiAvatar: {
    root: {
      width: 80,
      height: 100,
      textAlign: "center",
      objectFit: "cover",
      color: "transparent",
      textIndent: "10000px",
      padding: 12,
    },
    img: {
      objectFit: "contain",
    },
  },
};

export default overrides;
