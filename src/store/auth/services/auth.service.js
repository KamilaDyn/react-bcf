import axios from "axios";

const API_URL = "http://localhost:8000/users";

const saveTokenInLocalStorage = (tokenDetails) => {
  tokenDetails.expireDate = new Date(new Date().getTime() * 2);
  localStorage.setItem("currentUser", JSON.stringify(tokenDetails));
};

const addUser = (user) => {
  return axios.post(API_URL, user);
};
const loginRequest = () => {
  return axios.get(API_URL);
};

const formatError = (errorRespond) => {
  switch (errorRespond) {
    case "Email already exists":
      return "Podany email jest już w użyciu.";
    case "Nie ma takiego maila":
      return "Błędny mail lub hasło";
    default:
      return "";
  }
};

export { formatError, addUser, loginRequest, saveTokenInLocalStorage };
