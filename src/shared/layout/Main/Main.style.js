import { Box, styled } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme, isCardOpen }) => ({
  width: "100%",
  ...(isCardOpen && {
    maxWidth: "calc(100% - 380px)",
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
  }),
}));
