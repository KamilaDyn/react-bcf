import { styled } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(8),
}));

export const StyledShoppingCardIcon = styled(ShoppingCartOutlinedIcon)(
  ({ theme }) => ({
    fontSize: theme.typography.fontSize.s,
    color: theme.palette.secondary.main,
    textAlign: "center",
  })
);
