import { useState } from "react";
import { useProductContext } from "../../../../../context";
import { deleteProduct } from "../../services";

export const useDeleteProduct = () => {
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openPermission, setOpenPermission] = useState(false);
  const [productId, setProductId] = useState("");
  const { productContext } = useProductContext();

  const handleDelete = (id) => {
    setOpenPermission(true);
    deleteProduct(id, setMessage);
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
    message,
    setMessage,
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
