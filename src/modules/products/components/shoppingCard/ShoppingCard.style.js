import { Drawer, List, ListItem, styled, Typography } from "@material-ui/core";
import { theme } from "../../../../theme";

export const StyledDrawer = styled(Drawer)({
  maxWidth: 360,
  display: "inline-block",
  backgroundColor: theme.colors.col5,
});

export const StyledList = styled(List)({
  width: "100%",
  maxWidth: 360,
  display: "inline-block",
});
export const StyledListItem = styled(ListItem)({
  display: "block",
});

export const StyledTypography = styled(Typography)(({ price }) => ({
  fontSize: theme.fontSize.xs,

  ...(price && {
    fontSize: theme.fontSize.xxs,
  }),
}));
export const ActionsContainer = styled("div")({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "left",
});
