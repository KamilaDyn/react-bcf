import axios from "axios";

export const addProduct = (data) => {
  axios
    .post("http://localhost:8000/products", data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
