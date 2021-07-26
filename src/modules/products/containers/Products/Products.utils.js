import { useState, useEffect, useReducer } from "react";
import ShoppingListReducer from "./Reducer";
import axios from "axios";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {
    products,
    getProducts,
    open,
    setOpen,
  };
};

export const useCountItems = () => {
  const [shoppingList, dispatch] = useReducer(ShoppingListReducer, []);

  const countItemsInBasket = () => {
    if (shoppingList.length > 0) {
      const item = shoppingList.filter((item) => item.count > 0);
      return item.map((i) => i.count).reduce((a, b) => a + b, 0);
    }
  };

  return {
    dispatch,
    shoppingList,
    countItemsInBasket,
  };
};
