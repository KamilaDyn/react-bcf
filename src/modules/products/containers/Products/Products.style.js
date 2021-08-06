import { styled } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core/";

export const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "calc(100vh - 100px)",
  position: "relative",
  maxWidth: "100%",
  backgroundColor: theme.palette.secondary.contrastText,
}));
export const HeadBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  marginBottom: theme.spacing(3),
}));
export const NewProductBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const Wrapper = styled(Container)(({ isCardOpen }) => ({
  width: "100%",
  ...(isCardOpen &&
    {
      // width: "calc(100% - 360px)",
    }),
}));
