import { Button, styled } from "@material-ui/core";
import { theme } from "../../../../theme";

const StyledButton = styled(Button)({
  backgroundColor: theme.colors.col4,
  color: theme.colors.col1,
  width: 50,
  height: 50,
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  fontSize: theme.fontSize.s,
  "&:hover": {
    backgroundColor: theme.colors.col1,
    color: theme.colors.colf,
  },
});

export default StyledButton;
