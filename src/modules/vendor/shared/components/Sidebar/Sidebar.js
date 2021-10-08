import React from "react";
import { Box, Link } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { routes } from "../../../../../config/routes";
import { StyledCard } from "./Sidebar.style";

const Sidebar = () => {
  return (
    <StyledCard variant='outlined'>
      <Box display='flex' alignItems='center' mb={3}>
        <AddCircleOutlineIcon />
        <Link href={routes.addNewProduct} color='inherit'>
          Dodaj nowy produkt
        </Link>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        mb={3}
      >
        <Box display='flex'>
          <ListAltIcon />
          <Link href={routes.products} color='inherit'>
            Produkty
          </Link>
        </Box>

        <span>100</span>
      </Box>
    </StyledCard>
  );
};

export default Sidebar;
