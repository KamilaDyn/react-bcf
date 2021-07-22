import { makeStyles } from "@material-ui/core/";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "10px 0",
  },
  input: {
    lineHeight: 1.65,
    display: "block",
    margin: 0,
    border: "1px solid #eee",
    height: 40,
    width: "80px",
    padding: "0 12px",
    verticalAlign: "top",
    textAlign: "center",
    outline: "none",
  },
}));
