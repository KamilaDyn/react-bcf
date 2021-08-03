import { styled } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { theme } from "../../../../theme";
export const Form = styled("form")({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  marginBottom: 40,
});

export const StyledShoppingCardIcon = styled(ShoppingCartIcon)({
  fontSize: theme.fontSize.l,
  color: theme.colors.col1,
  textAlign: "center",
});
