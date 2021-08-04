import { IconButton, styled } from "@material-ui/core";

const StyledIconButton = styled(IconButton)(
  ({ theme, expandedOpen, isCard, float, basket, isAccordion }) => ({
    fontSize: theme.typography.fontSize.m,
    ...(expandedOpen && { transform: "rotate(180deg)" }),
    ...(isCard && {
      marginLeft: 0,
      width: "45px",
    }),
    ...(float && {
      float: "right",
      color: theme.palette.primary.main,
      position: "absolute",
      top: "50%",
      right: "20px",
    }),
    ...(basket && {
      position: "absolute",
      top: "10px",
      right: "5%",
      zIndex: 999999,
      fontSize: theme.typography.fontSize.s,
    }),
    ...(isAccordion && {
      fontSize: theme.typography.fontSize.xs,
    }),
  })
);

export default StyledIconButton;
