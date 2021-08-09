import { styled } from "@material-ui/core/styles";
import { Box, Container } from "@material-ui/core/";

export const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "calc(100vh - 100px)",
  position: "relative",
  maxWidth: "100%",
  backgroundColor: theme.palette.secondary.contrastText,
  paddingBottom: theme.spacing(20),
}));
export const NewProductBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const Wrapper = styled(Container)({
  width: "100%",
});
