import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";

const overrides = {
  MuiCssBaseline: {
    "@global": {
      "@font-face": typography.fontFamily,
    },
  },
  MuiButton: {
    text: {
      color: palette.primary.main,
      width: 30,
      height: 30,
      border: `1px solid ${palette.primary.main}`,
      minWidth: 0,
      minHeight: 0,
      lineHeight: 0,
      padding: spacing(1, 3),
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
      "&:disabled": {
        cursor: "not-allowed",
        pointerEvents: "none",
        opacity: 0.62,
      },
    },
  },
  MuiContainer: {
    root: {
      [breakpoints.up("sm")]: {
        paddingLeft: spacing(4),
        paddingRight: spacing(4),
      },
    },
  },
  MuiCardHeader: {
    root: {
      height: "120px",
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
      padding: spacing(3),
    },
    img: {
      objectFit: "contain",
    },
  },
  MuiDrawer: {
    paper: {
      maxWidth: 380,
    },
  },
  MuiListItem: {
    gutters: {
      textAlign: "center",
    },
    root: {
      justifyContent: "center",
    },
  },
};

export default overrides;
