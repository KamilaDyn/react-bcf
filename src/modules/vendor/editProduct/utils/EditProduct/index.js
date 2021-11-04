import { useEffect, useState } from "react";
import { editProduct, getProduct } from "../../services";
import { useDispatch } from "react-redux";
import { editOneProduct } from "../../../../../store/product/actions/actionsCreator";

export const useEditProduct = (productId) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [initialProductValues, setInitialProductValues] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      getProduct(productId, setInitialProductValues);
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
    // editProduct(initialProductValues, setMessage);
    dispatch(editOneProduct(initialProductValues));
    console.log("open");
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
