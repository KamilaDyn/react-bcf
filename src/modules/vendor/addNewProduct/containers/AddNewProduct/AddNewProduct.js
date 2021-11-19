import React from "react";
import { useSelector } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";
import { box } from "assets";
import { selectors } from "store";
import { ProductForm, Sidebar, InfoSnackbar } from "../../../shared";
import { useAddNewProduct } from "./AddNewProducts.utils";

const AddNewProduct = () => {
  const { onSubmit, setOpenSnackbar, handleCloseSnackbar, openSnackbar } =
    useAddNewProduct();
  const successMessage = useSelector(selectors.products.getSuccessMessage);
  const errorMessage = useSelector(selectors.products.getErrorMessage);
  const { initialProductValues } = useAddNewProduct();
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
            <Typography variant='h2'>Dodaj nowy produkt</Typography>
          </Box>
          <ProductForm
            onSubmit={onSubmit}
            initialProductValues={initialProductValues}
          />
          <InfoSnackbar
            openSnackbar={openSnackbar}
            message={successMessage || errorMessage}
            setOpenSnackbar={setOpenSnackbar}
            handleCloseSnackbar={handleCloseSnackbar}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddNewProduct;
