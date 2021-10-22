import { useEffect, useState } from "react";
import { JSON_API } from "../../../../helpers";

import axios from "axios";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios
      .get(`/products`)
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
