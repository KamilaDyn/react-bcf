import React, { useEffect, useState, useReducer } from "react";
import styled from "styled-components";
import { Head, Main, Footer } from "../../../shared";
import { Heading, ProductsList, ShoppingCard } from "../components";
import ShoppingListReducer from "../../../reducers";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 100px);
  width: 95%;
  margin: 50px auto 0;
  position: relative;
`;

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
  // const increment = (index, price) => {
  //   const currentItems = [...shoppingList];
  //   currentItems[index].count++;
  //   currentItems[index].price = currentItems[index].price + price;
  //   setShoppingList(currentItems);
  // };

  return (
    <>
      <Head>Sklep dla każdego</Head>
      <Wrapper>
        <Main>
          <Heading>Lista produktów</Heading>
          <ProductsList
            products={products}
            addHandler={dispatch}
            shoppingList={shoppingList}
          />
        </Main>
        <ShoppingCard shoppingList={shoppingList} deleteProduct={dispatch} />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Products;
