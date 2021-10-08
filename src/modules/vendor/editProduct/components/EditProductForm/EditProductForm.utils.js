import { useEffect, useState } from "react";
import axios from "axios";
// import { editProduct } from "../../services";
export const useEditProduct = (productId) => {
  const [productCategory, setProductCategory] = useState("");
  const [fieldValue, setFieldValue] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const [message, setMessage] = useState("");

  const { title, description, stock, price, sale, category, image, id } =
    singleProduct;
  console.log(sale);
  const initialProductValues = {
    name: title,
    description: description,
    stock: stock,
    tags: "",
    regularPrice: price,
    salePrice: sale,
    category: category,
    file: "",
    urlLink: image,
    id: id,
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleChange = (event) => {
    setProductCategory(event.target.value);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const getProduct = () => {
    axios
      .get(`http://localhost:8000/products/${productId}`)
      .then((response) => {
        setSingleProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = ({
    name,
    description,
    tags,
    stock,
    salesPrice,
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
      sale: salesPrice,
      stock: stock,
      uploadedImage: fieldValue ? fieldValue[0].name : "",
      id: id,
    };
    editProduct(data);
    setOpenSnackbar(true);
  };
  const editProduct = (data) => {
    axios
      .put(`http://localhost:8000/products/${data.id}`, data)
      .then((response) => {
        console.log(response.data);
        setMessage("Edytowałeś produkt");
        return response.data;
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
    initialProductValues,
    setFieldValue,
    openSnackbar,
    setOpenSnackbar,
    handleCloseSnackbar,
    singleProduct,
    message,
  };
};
