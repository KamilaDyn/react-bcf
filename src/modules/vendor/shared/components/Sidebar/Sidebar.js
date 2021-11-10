import React from "react";
import { Box } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { routes } from "config/routes";
import { StyledCard, activeStyle, StyledNavLink } from "./Sidebar.style";
import { useSidebarElements } from "./Sidebar.utils";

const Sidebar = () => {
  const { productLength } = useSidebarElements();

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
          <span>{productLength}</span>
        </Box>
      </StyledNavLink>
    </StyledCard>
  );
};

export default Sidebar;
