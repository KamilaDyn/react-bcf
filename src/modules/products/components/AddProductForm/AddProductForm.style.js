import { styled } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
export const Form = styled("form")({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 30,
});

export const StyledShoppingCardIcon = styled(ShoppingCartOutlinedIcon)(
  ({ theme }) => ({
    fontSize: theme.typography.fontSize.toLocaleString,
    color: theme.palette.secondary.main,
    textAlign: "center",
  })
);
