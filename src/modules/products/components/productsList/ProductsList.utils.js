import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../../store/product/actions/actionsCreator";
import { selectors } from "../../../../store";

export const useProductList = () => {
  const allProducts = useSelector(selectors.products.getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return {
    allProducts,
  };
};
