import React from "react";
import { useSelector } from "react-redux";
import { Box, Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { selectors } from "store";
import { InfoSnackbar, Loader } from "../../../shared";
import { Header } from "../Header";
import ProductItem from "../ProductItem/ProductItem";
import { useDeleteProduct } from "./ProductsList.utils";

const ProductsList = () => {
  const {
    handleDelete,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
    openPermission,
    handleClosePermission,
    setOpenPermission,
    productId,
    setProductId,
    loading,
  } = useDeleteProduct();
  const successMessage = useSelector(selectors.products.getSuccessMessage);
  const errorMessage = useSelector(selectors.products.getErrorMessage);
  return (
    <Box>
      <Header />
      <ProductItem
        setOpenPermission={setOpenPermission}
        setProductId={setProductId}
      />
      <InfoSnackbar
        openSnackbar={openSnackbar}
        message={successMessage ? successMessage : errorMessage}
        setOpenSnackbar={setOpenSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
      />
      <Dialog
        open={openPermission}
        onClose={handleClosePermission}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Usunąć produkt?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClosePermission}>Nie</Button>
          <Button
            onClick={() => {
              handleDelete(productId);
              handleClosePermission();
            }}
            autoFocus
          >
            Tak
          </Button>
        </DialogActions>
      </Dialog>
      <Loader loading />
    </Box>
  );
};

export default ProductsList;
