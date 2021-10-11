import React, { useState } from "react";
import { ProductContext } from "../../context";
import { useProductProvider, useGetProducts } from "./ProductProvider.utils";

const ProductProvider = ({ children }) => {
  const [openShoppingCard, setOpenShoppingCard] = useState(false);
  const { shoppingList, dispatch, countItemsInBasket } = useProductProvider();
  const { products, getProducts } = useGetProducts();

  const productContextValue = {
    shoppingList: shoppingList,
    dispatch: dispatch,
    countItemsInBasket: countItemsInBasket,
    openShoppingCard: openShoppingCard,
    setOpenShoppingCard: setOpenShoppingCard,
    getProducts: getProducts,
    products: products,
  };
  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
