import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { box } from "../../../../assets";
import { AddNewProductForm, Dashboard } from "../../components";

const AddNewProducts = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Dashboard />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box display='flex' alignItems='center'>
            <div>
              <img src={box} alt='box' />
            </div>
            <Typography variant='h2'>Dodaj nowy produkt</Typography>
          </Box>
          <AddNewProductForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddNewProducts;
