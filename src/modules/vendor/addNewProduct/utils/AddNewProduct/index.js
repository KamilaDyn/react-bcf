import { useState } from "react";
import { useProductContext } from "../../../../../context";
import { addProduct } from "../../services";
import { addNewProduct } from "../../../../../store/product/actions/actionsCreator";
import { useDispatch, useSelector } from "react-redux";
import { selectors } from "../../../../../store";

export const useAddNewProduct = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
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

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const onSubmit = (initialProductValues, { resetForm }) => {
    // addProduct(initialProductValues, setMessage);
    dispatch(addNewProduct(initialProductValues));
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
    setMessage,
    message,
  };
};
