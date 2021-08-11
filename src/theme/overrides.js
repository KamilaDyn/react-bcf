import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";
import spacing from "./spacing";

const overrides = {
  MuiTypography: {
    body1: { color: palette.text.secondary },
  },
  MuiCssBaseline: {
    "@global": {
      "@font-face": typography.fontFamily,
    },
  },
  MuiButton: {
    text: {
      color: palette.primary.main,
      width: "1.8rem",
      height: "1.8rem",
      border: `1px solid ${palette.primary.main}`,
      minWidth: 0,
      minHeight: 0,
      lineHeight: 0,
      padding: spacing(1, 3),
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: typography.body1.fontSize,
      fontWeight: "bold",
      transition: ".3s",
      [breakpoints.up("md")]: {
        fontSize: typography.h3.fontSize,
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
  MuiIconButton: {
    root: {
      fontSize: typography.h3.fontSize,
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
      height: "7.5rem",
    },
  },
  MuiSvgIcon: {
    root: {
      color: palette.secondary.main,
      fontSize: typography.h2.fontSize,
    },
  },
  MuiAvatar: {
    root: {
      width: "5rem",
      height: "6.5rem",
      textAlign: "center",
      objectFit: "cover",
      color: "transparent",
      textIndent: "10000px",
      padding: spacing(3),
      fontSize: typography.h4.fontSize,
    },
    img: {
      objectFit: "contain",
    },
  },
  MuiDrawer: {
    paper: {
      maxWidth: "23.75rem",
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
  MuiLink: {
    root: {
      textAlign: "center",
      "&:hover": {
        color: palette.primary.main,
      },
    },
  },
  MuiModal: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  MuiFormControl: {
    root: {
      width: "100%",
    },
  },
  MuiDialog: {
    paper: {
      overflowY: "hidden",
      overflowX: "hidden",
    },
    paperWidthSm: {
      maxWidth: 500,
    },
  },
  MuiDialogTitle: {
    root: {
      paddingTop: spacing(10),
    },
  },
  MuiDialogContent: {
    dividers: {
      padding: 0,
    },
    root: {
      overflow: "hidden",
      overflowY: "hidden",
      padding: 0,
    },
  },
  MuiPaper: {
    rounded: {
      borderRadius: 8,
    },
  },
};

export default overrides;
