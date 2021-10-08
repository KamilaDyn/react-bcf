import { useEffect, useState } from "react";
// import { getProduct } from "../services";
import { getProduct } from "../services/";

export const useEditProduct = (productId) => {
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const product = getProduct(productId);
    setSingleProduct(product);
  }, []);

  return {
    singleProduct,
    setSingleProduct,
  };
};
