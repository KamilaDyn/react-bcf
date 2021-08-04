import { styled } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
export const Form = styled("form")({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  marginBottom: 40,
});

export const StyledShoppingCardIcon = styled(ShoppingCartIcon)(({ theme }) => ({
  fontSize: theme.typography.fontSize.toLocaleString,
  color: theme.palette.primary.main,
  textAlign: "center",
}));
