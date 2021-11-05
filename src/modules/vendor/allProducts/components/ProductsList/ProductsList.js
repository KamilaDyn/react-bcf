import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  IconButton,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { selectors } from "../../../../../store";
import { InfoSnackbar } from "../../../shared";
import { Loader } from "../../../shared";
import { Header } from "../Header";
import { useDeleteProduct } from "./ProductsList.utils";
import { StyledCard } from "./ProductsList.style";

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
  const products = useSelector(selectors.products.getProducts);
  return (
    <Box>
      <Header />
      {products.length &&
        products.map((item) => (
          <StyledCard id={item.id}>
            <Grid container alignItems='center' spacing={2}>
              <Grid item xs={5}>
                <Typography color='inherit'> {item.title}</Typography>
              </Grid>
              <Grid item xs={1}>
                <Typography color='inherit'>{item.stock}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography color='inherit'>${item.price}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography color='inherit'>
                  {item.sale ? `$${item.sale}` : ""}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  component={Link}
                  to={`/vendor/edit-product/${item.id}`}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton>
                  <DeleteIcon
                    color='primary'
                    onClick={() => {
                      setOpenPermission(true);
                      setProductId(item.id);
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </StyledCard>
        ))}
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
      <Loader loading={loading} />
    </Box>
  );
};

export default ProductsList;
