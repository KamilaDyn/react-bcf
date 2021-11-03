import { styled, Container } from "@material-ui/core";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  padding: theme.spacing(8, 0),
}));
