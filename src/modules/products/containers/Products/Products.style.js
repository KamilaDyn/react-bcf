import { styled } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core/";

export const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "calc(100vh - 6.25rem)",
  position: "relative",
  maxWidth: "100%",
  backgroundColor: theme.palette.secondary.contrastText,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(30),
}));
export const NewProductBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const Wrapper = styled(Container)({
  width: "100%",
});
