import { Box, Drawer, styled, Typography } from "@material-ui/core";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: "100%",
  maxWidth: 380,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 4),
}));
export const ItemContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(4, 0),
  padding: theme.spacing(4),
  borderBottom: `1px solid ${theme.palette.secondary.contrastText}`,
}));
export const ControlBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const StyledTypography = styled(Typography)(
  ({ theme, price, summary }) => ({
    fontSize: theme.typography.fontSize.xs,

    ...(price && {
      fontSize: theme.typography.fontSize.xxs,
    }),
    ...(summary && {
      textTransform: "uppercase",
    }),
  })
);
export const ActionsContainer = styled("div")({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "left",
});

export const PayButton = styled("button")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2, 4),
  fontSize: theme.typography.fontSize.xs,
  color: theme.palette.primary.contrastText,
  cursor: "pointer",
  border: "none",
  width: 250,
  margin: theme.spacing(4, "auto"),
  transition: "0.3",
  borderRadius: 4,
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));
