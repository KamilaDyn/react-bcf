import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    minHeight: "calc(100vh - 100px)",
    width: "95%",
    margin: "50px auto 0",
    position: "relative",
  },
}));
