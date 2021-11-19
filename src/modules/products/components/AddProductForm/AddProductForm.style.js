import { styled } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(8),
}));

export const StyledShoppingCardIcon = styled(ShoppingCartOutlinedIcon)(
  ({ theme }) => ({
    fontSize: theme.typography.h2.fontSize,
    color: theme.palette.secondary.main,
    textAlign: "center",
  })
);
