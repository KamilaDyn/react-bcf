import { makeStyles } from "@material-ui/core";
const drawerWidth = "40%";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "inline-block",
  },
  noitems: {
    textAlign: "center",
    padding: "20px 0",
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));
