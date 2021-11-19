import { Avatar, Box, styled } from "@mui/material";

export const ShoppingInfo = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(8),
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 64,
  height: 64,
}));

