import { Drawer, List, ListItem, styled, Typography } from "@material-ui/core";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.secondary.contrastText,
  [theme.breakpoints.up("sm")]: {
    width: 360,
  },
}));

export const StyledList = styled(List)({
  width: "100%",
  maxWidth: 360,
  display: "inline-block",
});
export const StyledListItem = styled(ListItem)({
  display: "block",
  marginBottom: 20,
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
