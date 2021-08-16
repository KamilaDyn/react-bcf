import { IconButton, styled } from "@material-ui/core";

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.primary.main,
}));
