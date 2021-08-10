import { Button, styled } from "@material-ui/core";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  width: 50,
  height: 50,
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  fontSize: theme.typography.h2.fontSize,
  transition: ".3s",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export default StyledButton;
