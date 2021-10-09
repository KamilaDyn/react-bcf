import { useEffect, useState } from "react";
import { editProduct, getProduct } from "../../services";

export const useEditProduct = (productId) => {
  const [productCategory, setProductCategory] = useState("");
  const [fieldValue, setFieldValue] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { title, description, stock, price, sale, image, id, category } =
    singleProduct;

  const initialProductValues = {
    name: title,
    description: description,
    stock: stock,
    tags: "",
    regularPrice: price,
    salePrice: sale,
    category: productCategory,
    file: "",
    urlLink: image,
    id: id,
  };
  useEffect(() => {
    getProduct(productId, setSingleProduct);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setProductCategory(category);
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
  const onSubmit = ({
    name,
    description,
    tags,
    stock,
    salePrice,
    regularPrice,
    urlLink,
    id,
  }) => {
    const data = {
      title: name,
      price: regularPrice,
      description: description,
      category: productCategory,
      image: urlLink,
      tags: tags,
      sale: salePrice,
      stock: stock,
      uploadedImage: fieldValue ? fieldValue[0].name : "",
      id: id,
    };
    editProduct(data, setMessage);
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
    singleProduct,
    message,
    loading,
  };
};
