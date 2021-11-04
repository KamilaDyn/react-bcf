import axios from "axios";
const API_URL = "http://localhost:8000/products";

export const getProducts = () => {
  return axios.get(API_URL);
};

export const addProduct = (data) => {
  return axios.post(API_URL, data);
};

export const deleteProduct = (productId) => {
  return axios.delete(`${API_URL}/${productId}`);
};

export const editProduct = (item) => {
  console.log(item);
  return axios.put(`${API_URL}/${item.id}`, item);
};
