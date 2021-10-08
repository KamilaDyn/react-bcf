import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import { box } from "../../../../assets";
import { useEditProduct } from "../components";
import { ProductForm, Sidebar, InfoSnackbar } from "../../shared";

const EditProduct = (props) => {
  const {
    singleProduct,
    initialProductValues,
    productCategory,
    onSubmit,
    message,
    setOpenSnackbar,
    handleCloseSnackbar,
  } = useEditProduct(props.match.params.id);
  const { title, category, description, image, price, sale, stock } =
    singleProduct;
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
            <Typography variant='h2'>Edytuj Produkt</Typography>
          </Box>
          <ProductForm
            name={title}
            category={category}
            description={description}
            image={image}
            price={price}
            sale={sale}
            stock={stock}
            initialProductValues={initialProductValues}
            productCategory={productCategory}
            onSubmit={onSubmit}
          />
          <InfoSnackbar
            message={message}
            setOpenSnackbar={setOpenSnackbar}
            handleCloseSnackbar={handleCloseSnackbar}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditProduct;
