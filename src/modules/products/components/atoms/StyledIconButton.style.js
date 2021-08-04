import { IconButton, styled } from "@material-ui/core";
import { theme } from "../../../../theme";

const StyledIconButton = styled(IconButton)(
  ({ expandedOpen, isCard, float }) => ({
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    ...(expandedOpen && { transform: "rotate(180deg)" }),
    ...(isCard && {
      marginLeft: 0,
      justifyContent: "start",
      width: "45px",
    }),
    ...(float && {
      float: "right",
      color: theme.colors.col1,
    }),
  })
);

export default StyledIconButton;
