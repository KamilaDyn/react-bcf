import { useState, useEffect } from "react";
import { useProductContext } from "../../../../../context";
import { actions } from "../../../../../store";
import { useDispatch } from "react-redux";

export const useAddNewProduct = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { productContext } = useProductContext();
  const dispatch = useDispatch();

  const initialProductValues = {
    title: "",
    description: "",
    stock: 1,
    tags: "",
    price: "",
    sale: "",
    category: "Elektronika",
    file: "",
    image: "",
  };

  useEffect(() => {
    dispatch(actions.products.setInitialProductValues(initialProductValues));
  }, []);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const onSubmit = (initialProductValues, { resetForm }) => {
    dispatch(actions.products.addNewProduct(initialProductValues));
    resetForm();
    setOpenSnackbar(true);
    setTimeout(() => {
      productContext.getProducts();
    }, 500);
  };

  return {
    onSubmit,
    initialProductValues,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
  };
};
