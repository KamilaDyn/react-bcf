import customBreakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";
import customSpacing from "./spacing";

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
      width: 30,
      height: 30,
      border: `1px solid ${palette.primary.main}`,
      minWidth: 0,
      minHeight: 0,
      lineHeight: 0,
      padding: customSpacing.spacing(1, 3),
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: typography.body1.fontSize,
      fontWeight: "bold",
      transition: ".3s",
      [customBreakpoints.breakpoints.up("md")]: {
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
      [customBreakpoints.breakpoints.up("sm")]: {
        paddingLeft: customSpacing.spacing(4),
        paddingRight: customSpacing.spacing(4),
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
      fontSize: typography.h3.fontSize,
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
      padding: customSpacing.spacing(3),
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
      minWidth: "50%",
    },
  },
  MuiDialogTitle: {
    root: {
      paddingTop: customSpacing.spacing(10),
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
