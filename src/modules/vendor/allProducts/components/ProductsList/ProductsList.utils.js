import { useState } from "react";
import { useProductContext } from "../../../../../context";
import { deleteProduct } from "../../services";
import { useDispatch } from "react-redux";
import { actions } from "../../../../../store";

export const useDeleteProduct = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openPermission, setOpenPermission] = useState(false);
  const [productId, setProductId] = useState("");
  const { productContext } = useProductContext();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    setOpenPermission(true);
    dispatch(actions.deleteOneProduct(id));
    setOpenSnackbar(true);
    setTimeout(() => {
      productContext.getProducts();
    }, 500);
  };
  const handleClosePermission = () => {
    setOpenPermission(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return {
    handleDelete,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
    handleClosePermission,
    openPermission,
    setOpenPermission,
    productId,
    setProductId,
  };
};
