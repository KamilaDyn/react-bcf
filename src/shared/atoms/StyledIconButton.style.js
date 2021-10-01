import { IconButton, styled } from "@material-ui/core";

const StyledIconButton = styled(IconButton)(
  ({ theme, expandedOpen, isCard, deleteBtn }) => ({
    fontSize: theme.typography.h3.fontSize,
    ...(expandedOpen && { transform: "rotate(180deg)" }),
    ...(isCard && {
      marginLeft: theme.spacing(0),
      width: "2.8rem",
    }),
    ...(deleteBtn && {
      color: theme.palette.primary.main,
    }),
  })
);

export default StyledIconButton;
