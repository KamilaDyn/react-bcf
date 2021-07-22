import React, { useEffect, useState, useReducer } from "react";
import { Head, Main, Footer } from "../../../../shared";
import { Heading, ProductsList, ShoppingCard } from "../../components";

import ShoppingListReducer from "./Products.utils";
import { Wrapper } from "./Product.style";
import ProductContext from "./ProductContext";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [shoppingList, dispatch] = useReducer(ShoppingListReducer, []);

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

  return (
    <>
      <Head>Sklep dla każdego</Head>
      <Wrapper>
        <Main>
          <Heading>Lista produktów</Heading>
          <ProductContext.Provider
            value={{
              shoppingList: shoppingList,
              products: products,
              dispatch: dispatch,
            }}
          >
            <ProductsList products={products} shoppingList={shoppingList} />
          </ProductContext.Provider>
        </Main>
        <ProductContext.Provider
          value={{
            shoppingList: shoppingList,
            dispatch: dispatch,
          }}
        >
          <ShoppingCard />
        </ProductContext.Provider>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Products;
