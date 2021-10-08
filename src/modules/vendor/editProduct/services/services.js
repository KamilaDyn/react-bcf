import axios from "axios";

export const getProduct = (productId) => {
  axios
    .get(`http://localhost:8000/products/${productId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editProduct = (item) => {
  axios
    .put(`http://localhost:8000/products/${item.id}`, { item })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
