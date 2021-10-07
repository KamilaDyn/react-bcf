import * as Yup from "yup";
import { useState } from "react";
import { URL } from "../../../../shared";

import { addProduct } from "../../services";

export const categories = [
  "Odzież męska",
  "Odzież damska",
  "Biżuteria",
  "Elektronika",
];

export const fieldsData = [
  {
    name: "tags",
    type: "text",
    label: "Tags",
  },
  {
    name: "stock",
    type: "number",
    label: "Ilość",
  },
  {
    name: "regularPrice",
    type: "number",
    label: "Cena",
  },
  {
    name: "salePrice",
    type: "number",
    label: "Cena promocyjna",
  },
];

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
    console.log(data);
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
