import axios from "axios";

export const getProduct = async (productId, setSingleProduct) => {
  try {
    await axios
      .get(`http://localhost:8000/products/${productId}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  } catch (error) {
    console.log(error);
  }
};
