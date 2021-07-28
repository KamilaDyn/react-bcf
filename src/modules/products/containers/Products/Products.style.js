import { makeStyles, styled } from "@material-ui/core/styles";
import { Badge, IconButton, Container } from "@material-ui/core/";

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  minHeight: "calc(100vh - 100px)",
  width: "95%",
  margin: "50px auto 0",
  position: "relative",
}));

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // container: {
  //   display: "flex",
  //   flexDirection: "row",
  //   minHeight: "calc(100vh - 100px)",
  //   width: "95%",
  //   margin: "50px auto 0",
  //   position: "relative",
  // },
}));
