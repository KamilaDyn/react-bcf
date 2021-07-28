import { IconButton, styled } from "@material-ui/core";

const StyledIconButton = styled(IconButton)(({ theme, expandopen, card }) => ({
  transform: "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  ...(expandopen && { transform: "rotate(180deg)" }),
  ...(card && {
    marginLeft: 0,
    justifyContent: "start",
    width: "45px",
  }),
}));

export default StyledIconButton;
