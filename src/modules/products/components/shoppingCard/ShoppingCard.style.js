import { Drawer, List, styled } from "@material-ui/core";

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
  display: "inline-block",
}));

export const StyledList = styled(List)(({ theme }) => ({
  width: "100%",
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
  display: "inline-block",
}));
