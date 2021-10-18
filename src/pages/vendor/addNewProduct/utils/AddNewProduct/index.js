import { useState } from "react";
import { useProductContext } from "../../../../../context";
import { addProduct } from "../../services";

export const useAddNewProduct = () => {
  const [fieldValue, setFieldValue] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const { productContext } = useProductContext();

  const initialProductValues = {
    title: "",
    description: "",
    stock: 1,
    tags: "",
    price: "",
    sale: "",
    category: "Elektronika",
    file: fieldValue,
    image: "",
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const onSubmit = (initialProductValues, { resetForm }) => {
    addProduct(initialProductValues, setMessage);
    resetForm();
    setOpenSnackbar(true);
    setTimeout(() => {
      productContext.getProducts();
    }, 500);
  };

  return {
    onSubmit,
    initialProductValues,
    setFieldValue,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
    setMessage,
    message,
  };
};
