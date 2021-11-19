import { Card, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
}));
export const activeStyle = {
  color: "#D23F57",
  textDecoration: "none",
};

export const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
});
