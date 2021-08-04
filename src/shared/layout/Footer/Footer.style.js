import { Container, styled, Typography } from "@material-ui/core";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: "100wv",
  height: 50,
  lineHeight: 50,
  marginTop: 50,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  textAlign: "center",
  lineHeight: "50px",
}));
