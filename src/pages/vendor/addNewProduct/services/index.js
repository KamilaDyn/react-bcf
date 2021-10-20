import axios from "axios";

export const addProduct = (data, setMessage) => {
  axios
    .post("/products", data)
    .then((response) => {
      setMessage("Nowy produkt został dodany");
      return response.data;
    })
    .catch((error) => {
      setMessage("Nie można dodać produktu");
      console.log(error);
    });
};
