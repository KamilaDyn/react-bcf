import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actions } from "store";

export const useDeleteProduct = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openPermission, setOpenPermission] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState("");
  const { getAllProducts, deleteOneProduct } = actions.products;
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllProducts());
    }, 300);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 600);
  });

  const handleDelete = (id) => {
    setOpenPermission(true);
    dispatch(deleteOneProduct(id));
    setOpenSnackbar(true);
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
    loading,
  };
};
