import { useState } from "react";
import { useProductContext } from "../../../../../context";
import { addProduct } from "../../services";

export const useAddNewProduct = () => {
  const [productCategory, setProductCategory] = useState("Elektronika");
  const [fieldValue, setFieldValue] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const { productContext } = useProductContext();

  console.log(productContext);

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
    addProduct(data, setMessage);
    resetForm();
    setOpenSnackbar(true);
    setTimeout(() => {
      productContext.getProducts();
    }, 500);
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
    setMessage,
    message,
  };
};
