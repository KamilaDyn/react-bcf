import { Box, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme, addImg }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  padding: theme.spacing(5),
  borderRadius: 8,
  ...(addImg && {
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }),
}));
