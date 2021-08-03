import { styled } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { theme } from "../../../../theme";

const StyledButton = styled(Button)({
  padding: "3px",
  backgroundColor: "blue",
  width: "40px",
  height: "24px",
  border: "none",
  borderRadius: "50px",
  fontFamily: "Montserrat",
  fontWeight: 600,
  fontSize: theme.fontSize.s,
  cursor: "pointer",
  color: "white",
});

export default StyledButton;
