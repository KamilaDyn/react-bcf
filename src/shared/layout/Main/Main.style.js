import { Container, styled } from "@material-ui/core";

export const StyledContainer = styled(Container)(({ isCardOpen }) => ({
  width: "100%",
  ...(isCardOpen && {
    maxWidth: "calc(100% - 380px)",
  }),
}));