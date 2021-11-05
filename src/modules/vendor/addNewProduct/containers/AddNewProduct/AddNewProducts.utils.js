import { useState } from "react";
import { actions } from "../../../../../store";
import { useDispatch } from "react-redux";

export const useAddNewProduct = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
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
  };

  return {
    onSubmit,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
    initialProductValues,
  };
};
