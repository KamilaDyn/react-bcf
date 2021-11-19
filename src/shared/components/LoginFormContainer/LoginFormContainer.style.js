import { Grid, styled } from "@mui/material";

export const ResetContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  height: "3.5rem",
  marginTop: theme.spacing(5),
}));
