import { IconButton, styled } from "@material-ui/core";

const StyledIconButton = styled(IconButton)(({ theme, open, isCard }) => ({
  transform: "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  ...(open && { transform: "rotate(180deg)" }),
  ...(isCard && {
    marginLeft: 0,
    justifyContent: "start",
    width: "45px",
    backgroundColor: "red",
  }),
}));

export default StyledIconButton;
