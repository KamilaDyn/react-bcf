import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { box } from "../../../../../assets";
import { ProductForm, Sidebar, InfoSnackbar } from "../../../shared";
import { useAddNewProduct } from "../../utils";
import { useSelector } from "react-redux";
import { selectors } from "../../../../../store";

const AddNewProduct = () => {
  const {
    initialProductValues,
    productCategory,
    onSubmit,
    setOpenSnackbar,
    handleCloseSnackbar,
    handleChange,
    openSnackbar,
    setFieldValue,
  } = useAddNewProduct();
  const message = useSelector(selectors.products.getSuccessMessage);
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
            initialProductValues={initialProductValues}
            productCategory={productCategory}
            onSubmit={onSubmit}
            handleChange={handleChange}
            setFieldValue={setFieldValue}
          />
          <InfoSnackbar
            openSnackbar={openSnackbar}
            message={message}
            setOpenSnackbar={setOpenSnackbar}
            handleCloseSnackbar={handleCloseSnackbar}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddNewProduct;
