import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { box } from "../../../../../assets";
import { ProductForm, Sidebar, InfoSnackbar } from "../../../shared";
import { useAddNewProduct } from "../../utils";
import { useSelector } from "react-redux";
import { selectors } from "../../../../../store";

const AddNewProduct = () => {
  const { onSubmit, setOpenSnackbar, handleCloseSnackbar, openSnackbar } =
    useAddNewProduct();
  const successMessage = useSelector(selectors.products.getSuccessMessage);
  const errorMessage = useSelector(selectors.products.getErrorMessage);
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
          <ProductForm onSubmit={onSubmit} />
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
