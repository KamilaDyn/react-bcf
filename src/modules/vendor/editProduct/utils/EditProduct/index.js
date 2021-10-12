import { useEffect, useState } from "react";
import { editProduct, getProduct } from "../../services";

export const useEditProduct = (productId) => {
  const [productCategory, setProductCategory] = useState("");
  const [fieldValue, setFieldValue] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [initialProductValues, setInitialProductValues] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getProduct(productId, setInitialProductValues);
 
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setProductCategory(initialProductValues.category);
      setLoading(true);
    }, 1500);
  });

  const handleChange = (event) => {
    setProductCategory(event.target.value);
  };
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
    productCategory,
    onSubmit,
    setProductCategory,
    handleChange,
    initialProductValues,
    setFieldValue,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
    message,
    loading,
  };
};
