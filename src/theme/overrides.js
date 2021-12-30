import customBreakpoints from './breakpoints';
import palette from './palette';
import typography from './typography';
import customSpacing from './spacing';

const overrides = {
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
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: '.3s',

          '&:hover': {
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText,
          },
          '&:disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'none',
            opacity: 0.62,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          [customBreakpoints.breakpoints.up('sm')]: {
            paddingLeft: customSpacing.spacing(4),
            paddingRight: customSpacing.spacing(4),
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          textDecoration: 'none',
          '&:hover': {
            color: palette.primary.main,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        gutters: {
          textAlign: 'center',
        },
        root: {
          justifyContent: 'center',
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
    MuiStepper: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
          height: 200,
        },
      },
    },
  },
};

export default overrides;
