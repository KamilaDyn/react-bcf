import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";

export const categories = [
  {
    value: "Odzież męska",
  },
  {
    value: "Odzież damska",
  },
  {
    value: "Biżuteria",
  },
  {
    value: "Elektronika",
  },
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
  const [newProduct, setNewProduct] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const URL =
    /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;

  const initialProductValues = {
    name: "",
    description: "",
    stock: 1,
    tags: "",
    regularPrice: 0.01,
    salePrice: 0.01,
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
      .required("Wymagane nazwa"),
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
  const onSubmit = (values, { setSubmitting }) => {
    let title = values.name;
    let description = values.description;
    let category = productCategory;
    let tags = values.tags;
    let stock = values.stock;
    let salePrice = values.salePrice;
    let price = values.regularPrice;
    let uploadedImage = fieldValue ? fieldValue[0].name : "";
    let image = values.urlLink;
    let data = {
      title,
      price,
      description,
      category,
      image,
      tags,
      salePrice,
      stock,
      uploadedImage,
    };
    addProduct(data);
    setSubmitting(false);
    setOpenSnackbar(true);
  };
  const addProduct = (data) => {
    axios
      .post("http://localhost:8000/products", data)
      .then((response) => {
        setNewProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    productCategory,
    onSubmit,
    setProductCategory,
    handleChange,
    SignupSchema,
    initialProductValues,
    setFieldValue,
    newProduct,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
  };
};
