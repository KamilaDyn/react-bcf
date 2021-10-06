import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";

export const useAddNewProduct = () => {
  const [category, setCategory] = useState("Elektronika");
  const [fieldValue, setFieldValue] = useState(null);
  const [newProduct, setNewProduct] = useState({});

  const initialProductValues = {
    name: "",
    description: "",
    stock: 1,
    tags: "",
    regularPrice: 0.01,
    salePrice: 0.01,
    category: category,
    file: "",
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
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
  });
  const onSubmit = (values, { setSubmitting }) => {
    let title = values.name;
    let description = values.description;
    let category = values.category;
    let tags = values.tags;
    let stock = values.stock;
    let salePrice = values.salePrice;
    let price = values.regularPrice;
    let image = fieldValue ? fieldValue[0].name : "";
    let data = {
      title,
      price,
      description,
      category,
      image,
      tags,
      salePrice,
      stock,
    };
    addProduct(data);
    setSubmitting(false);
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
    category,
    onSubmit,
    setCategory,
    handleChange,
    SignupSchema,
    initialProductValues,
    setFieldValue,
    newProduct,
  };
};
