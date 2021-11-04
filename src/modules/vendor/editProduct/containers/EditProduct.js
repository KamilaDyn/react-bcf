import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { box } from "../../../../assets";
import { useEditProduct } from "../utils";
import { ProductForm, Sidebar, InfoSnackbar, Loader } from "../../shared";
import { useSelector } from "react-redux";
import { selectors } from "../../../../store";

const EditProduct = (props) => {
  const {
    initialProductValues,
    onSubmit,
    setOpenSnackbar,
    handleCloseSnackbar,
    handleChange,
    openSnackbar,
    setFieldValue,
    loading,
  } = useEditProduct(props.match.params.id);
  const message = useSelector(selectors.products.getSuccessMessage);
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
              initialProductValues={initialProductValues}
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
        <Loader loading={loading} />
      </Container>
    </>
  );
};

export default EditProduct;
