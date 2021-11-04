import { useEffect, useState } from "react";
// import { editProduct, getProduct } from "../../services";
import { useDispatch } from "react-redux";
import { actions } from "../../../../../store";

export const useEditProduct = (productId) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [initialProductValues, setInitialProductValues] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      // getProduct(productId, setInitialProductValues);
      dispatch(actions.products.getSingleProduct(productId));
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const onSubmit = (initialProductValues) => {
    dispatch(actions.products.editOneProduct(initialProductValues));
    setOpenSnackbar(true);
  };

  return {
    onSubmit,
    initialProductValues,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
    message,
    loading,
  };
};
