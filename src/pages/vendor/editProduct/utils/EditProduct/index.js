import { useEffect, useState } from "react";
import { editProduct, getProduct } from "../../services";

export const useEditProduct = (productId) => {
  const [fieldValue, setFieldValue] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [initialProductValues, setInitialProductValues] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      getProduct(productId, setInitialProductValues);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500);
  });

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const onSubmit = (initialProductValues) => {
    editProduct(initialProductValues, setMessage);
    setOpenSnackbar(true);
  };

  return {
    onSubmit,
    initialProductValues,
    setFieldValue,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
    message,
    loading,
  };
};
