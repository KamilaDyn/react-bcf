import { useEffect, useState } from "react";

import axios from "axios";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    products,
    getProducts,
  };
};
