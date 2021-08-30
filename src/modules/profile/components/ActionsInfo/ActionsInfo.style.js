import { Avatar, Box, styled } from "@material-ui/core";

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

export const FlexBox = styled(Box)(({ theme, balance }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ...(balance && {
    flex: "1 1 0px",
    marginLeft: theme.spacing(2),
  }),
}));
