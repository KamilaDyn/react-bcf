import { styled } from "@material-ui/core/styles";
import { Container } from "@material-ui/core/";

export const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "row",
  minHeight: "calc(100vh - 100px)",
  width: "95%",
  margin: "50px auto 0",
  position: "relative",
});
