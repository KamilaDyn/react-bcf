import React from "react";
import { Box, Card, Link } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { StyledCard } from "./Dashboard.style";

const Dashboard = () => {
  return (
    <StyledCard variant='outlined'>
      <Box display='flex' alignItems='center' mb={3}>
        <AddCircleOutlineIcon />
        <Link href='#' color='inherit'>
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
          <Link href='#' color='inherit'>
            Produkty
          </Link>
        </Box>

        <span>100</span>
      </Box>
    </StyledCard>
  );
};

export default Dashboard;
