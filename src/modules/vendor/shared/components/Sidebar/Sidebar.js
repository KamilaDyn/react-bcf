import React from "react";
import { Box } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { useGetProducts } from "../../../../../shared";
import { routes } from "../../../../../config/routes";
import { StyledCard, activeStyle, StyledNavLink } from "./Sidebar.style";

const Sidebar = () => {
  const { products } = useGetProducts();
  return (
    <StyledCard variant='outlined'>
      <StyledNavLink to={routes.addNewProduct} activeStyle={activeStyle}>
        <Box display='flex' alignItems='center' mb={3}>
          <AddCircleOutlineIcon />
          <span>Dodaj nowy produkt</span>
        </Box>
      </StyledNavLink>
      <StyledNavLink to={routes.products} activeStyle={activeStyle}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          mb={3}
        >
          <Box display='flex'>
            <ListAltIcon />
            <span> Produkty</span>
          </Box>
          <span>{products.length}</span>
        </Box>
      </StyledNavLink>
    </StyledCard>
  );
};

export default Sidebar;
