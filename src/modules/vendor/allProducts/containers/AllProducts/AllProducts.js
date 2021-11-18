import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { box } from "assets";
import { Sidebar } from "../../../shared";
import { ProductsList } from "../../components";

const AllProducts = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box display='flex' alignItems='center'>
            <div>
              <img src={box} alt='box' />
            </div>
            <Typography variant='h2'>Wszystkie Produkty</Typography>
          </Box>
          <ProductsList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AllProducts;
