import { useState } from "react";
import * as Yup from "yup";
import { addProduct } from "../../services";

export const useAddNewProduct = () => {
  const [productCategory, setProductCategory] = useState("Elektronika");
  const [fieldValue, setFieldValue] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const initialProductValues = {
    name: "",
    description: "",
    stock: 1,
    tags: "",
    regularPrice: "",
    salePrice: "",
    category: productCategory,
    file: "",
    urlLink: "",
  };

  const handleChange = (event) => {
    setProductCategory(event.target.value);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Nazwa produktu jest za krótka")
      .required("Wymagana nazwa"),
    description: Yup.string()
      .min(15, "Opis jest za krótki")
      .required("Wprowadź opis produktu. Minimum 15 znaków"),
    stock: Yup.number()
      .min(1, "Minimum 1")
      .required("Wprowadź ilość produktów"),
    regularPrice: Yup.number()
      .min(0.01, "Minimum 1")
      .required("Wprowadź cenę produktu"),
    salePrice: Yup.number()
      .min(0.01, "Minimum 1")
      .required("Wprowadź promocyjną cenę"),
    urlLink: Yup.string()
      .matches(URL, "wprowadź porpwany link url")
      .required("Wpisz link do obrazka"),
  });

  const onSubmit = (
    { name, description, tags, stock, salesPrice, regularPrice, urlLink },
    { resetForm }
  ) => {
    const data = {
      title: name,
      price: regularPrice,
      description: description,
      category: productCategory,
      image: urlLink,
      tags: tags,
      salePrice: salesPrice,
      stock: stock,
      uploadedImage: fieldValue ? fieldValue[0].name : "",
    };
    addProduct(data);
    resetForm();
    setOpenSnackbar(true);
  };

  return {
    productCategory,
    onSubmit,
    setProductCategory,
    handleChange,
    SignupSchema,
    initialProductValues,
    setFieldValue,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
  };
};
