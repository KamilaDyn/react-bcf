import { Drawer, IconButton, List, styled } from "@material-ui/core";

const drawerWidth = "40%";

export const StyledDrawer = styled(Drawer)(({ theme, custom }) => ({
  //width: "100%",
  maxWidth: 360,
  backgroundColor: theme.palette.background.paper,
  display: "inline-block",
  ...(custom && {
    maxWidth: "40%",
  }),
}));

export const StyledList = styled(List)(({ theme, custom }) => ({
  ...(custom && {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "inline-block",
  }),
}));
export const StyledIconButton = styled(IconButton)({
  marginLeft: "0 !important",
  justifyContent: "start",
  justifySelf: "start",
  color: "red",
  backgroundColor: "red",
});
