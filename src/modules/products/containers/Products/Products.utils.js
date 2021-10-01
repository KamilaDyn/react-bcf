import { useEffect, useReducer, useState } from "react";

import axios from "axios";

const shoppingListReducer = (shoppingList, action) => {
  switch (action.type) {
    case "ADD":
      return [...shoppingList, action.productItem];
    case "REMOVE":
      return shoppingList.filter((product) => product.id !== action.id);
    case "INCREMENT":
      return [...shoppingList];
    case "DECREMENT":
      return;
    default:
      throw new Error("Ooop, something went wrong...");
  }
};

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
      .catch( (error)=> {
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
  const [shoppingList, dispatch] = useReducer(shoppingListReducer, []);

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
