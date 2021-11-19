import { styled, Container } from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  padding: theme.spacing(8, 0),
}));
