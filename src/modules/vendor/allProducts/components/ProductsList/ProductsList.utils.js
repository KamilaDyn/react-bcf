import { useState, useEffect } from "react";
import { useProductContext } from "../../../../../context";
import { deleteProduct } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "../../../../../store";

export const useDeleteProduct = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openPermission, setOpenPermission] = useState(false);
  const [loading, setLoading] = useState(false);

  const [productId, setProductId] = useState("");
  const { productContext } = useProductContext();

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      // getProduct(productId, setInitialProductValues);
      dispatch(actions.products.getAllProducts());
    }, 300);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 600);
  });

  const handleDelete = (id) => {
    setOpenPermission(true);
    dispatch(actions.products.deleteOneProduct(id));
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
    loading,
  };
};
