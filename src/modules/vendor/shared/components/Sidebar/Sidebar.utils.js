import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "store";

export const useSidebarElements = () => {
  const productLength = useSelector(selectors.products.getProducts).length;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.products.getAllProducts());
  }, []);
  return { productLength };
};
