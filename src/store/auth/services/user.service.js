import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8000/users";

const getPublicContent = () => {
  return axios.get(API_URL);
};

const getUserBoard = () => {
  return axios.get(API_URL, { headers: authHeader() });
};

export { getPublicContent, getUserBoard };
