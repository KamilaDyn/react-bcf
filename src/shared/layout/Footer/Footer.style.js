import { Container, styled, Typography } from "@material-ui/core";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  maxWidth: "100vw",
  padding: theme.spacing(15, 20),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  marginTop: theme.spacing(5),
}));
