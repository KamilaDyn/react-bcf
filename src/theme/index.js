import { createTheme } from "@mui/material/styles";
import customBreakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";
import customSpacing from "./spacing";
import overrides from "./overrides";
import props from "./props";
export const theme = createTheme({
  breakpoints: customBreakpoints.breakpoints,
  palette: {
    primary: {
      light: "#e3364e",
      main: "#D23F57",
      contrastText: "#fff",
      dark: "#b00e29",
    },
    secondary: {
      light: "#b6d4f0",
      main: "#203345",
      contrastText: "#F6F9FC",
      dark: "#15314d",
    },
    textSecondary: {
      main: "#7D879C",
    },
    text: {
      secondary: "#AEB4BE",
    },
    action: {
      hover: "#e3364e",
    },
  },

  typography,
  spacing: 4,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
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
          // fontSize: typography.body1.fontSize,
          fontWeight: "bold",
          transition: ".3s",
          // [customBreakpoints.breakpoints.up("md")]: {
          //   fontSize: typography.h3.fontSize,
          // },
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
    },
    MuiCard: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [customBreakpoints.breakpoints.up("sm")]: {
            paddingLeft: customSpacing.spacing(4),
            paddingRight: customSpacing.spacing(4),
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textAlign: "center",
          textDecoration: "none",
          "&:hover": {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        gutters: {
          textAlign: "center",
        },
        root: {
          justifyContent: "center",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: typography.h3.fontSize,
        },
      },
    },
  },
});
