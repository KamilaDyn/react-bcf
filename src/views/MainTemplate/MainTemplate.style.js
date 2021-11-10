import { Box, styled } from "@mui/material";
export const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: "calc(100vh - 6.25rem)",
  position: "relative",
  maxWidth: "100%",
  backgroundColor: theme.palette.secondary.contrastText,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(30),
}));
