import axios from "axios";

export const getProduct = async (productId, setInitialProductValues) => {
  try {
    await axios
      .get(`http://localhost:8000/products/${productId}`)
      .then((response) => {
        setInitialProductValues(response.data);
      });
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (item, setMessage) => {
  try {
    await axios
      .put(`http://localhost:8000/products/${item.id}`, item)
      .then((response) => {
        setMessage("Edytowałeś produkt");
        return response.data;
      });
  } catch (error) {
    setMessage("Wystąpił problem z edytowaniem produktu");
  }
};
