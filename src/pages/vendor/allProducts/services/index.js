import axios from "axios";

export const deleteProduct = (productId, setMessage) => {
  axios
    .delete(`/products/${productId}`)
    .then((response) => {
      setMessage("Product usunięty z listy");
      return response.data;
    })
    .catch((error) => {
      setMessage("Nie mogliśmy usunąć produktu");
      console.log(error);
    });
};
