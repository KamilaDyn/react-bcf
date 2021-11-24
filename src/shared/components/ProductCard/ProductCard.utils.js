import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectors, actions } from "store";

export const useProductList = () => {
  const allProducts = useSelector(selectors.products.getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.products.getAllProducts());
  }, []);
  return allProducts;
};
