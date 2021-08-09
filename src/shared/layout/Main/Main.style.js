import { Container, styled } from "@material-ui/core";

export const StyledContainer = styled(Container)(({ theme, isCardOpen }) => ({
  width: "100%",
  ...(isCardOpen && {
    maxWidth: "calc(100% - 380px)",
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  }),
}));
