import React from "react";
import { useSelector } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";
import { box } from "assets";
import { selectors } from "store";
import { ProductForm, Sidebar, InfoSnackbar, Loader } from "../../shared";
import { useEditProduct } from "./EditProduct.utils";

const EditProduct = (props) => {
  const {
    onSubmit,
    setOpenSnackbar,
    handleCloseSnackbar,
    handleChange,
    openSnackbar,
    setFieldValue,
    loading,
    singleProduct,
  } = useEditProduct(props.match.params.id);
  const successMessage = useSelector(selectors.products.getSuccessMessage);
  const errorMessage = useSelector(selectors.products.getErrorMessage);

  return (
    <>
      <Container style={{ position: "relative" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box display='flex' alignItems='center'>
              <div>
                <img src={box} alt='box' />
              </div>
              <Typography variant='h2'>Edytuj Produkt</Typography>
            </Box>
            <ProductForm
              initialProductValues={singleProduct}
              onSubmit={onSubmit}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
            />
            <InfoSnackbar
              openSnackbar={openSnackbar}
              message={successMessage || errorMessage}
              setOpenSnackbar={setOpenSnackbar}
              handleCloseSnackbar={handleCloseSnackbar}
            />
          </Grid>
        </Grid>
        <Loader loading={loading} />
      </Container>
    </>
  );
};

export default EditProduct;
