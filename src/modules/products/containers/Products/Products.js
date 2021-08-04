import React from "react";
import { Badge } from "@material-ui/core/";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Head, Main, Footer } from "../../../../shared";
import { ProductContext } from "../../../context";
import { ShoppingCard, ProductsList } from "../../components";
import { Heading } from "../../components/atoms";
import { BasketButton, StyledContainer, Wrapper } from "./Products.style";
import { useGetProducts, useCountItems } from "./Products.utils";

const Products = () => {
  const { products, open, setOpen } = useGetProducts();
  const { shoppingList, dispatch, countItemsInBasket } = useCountItems();
  return (
    <>
      <Head>Sklep dla każdego</Head>
      <BasketButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={() => setOpen(!open)}
      >
        <Badge
          badgeContent={shoppingList.length > 0 ? countItemsInBasket() : "0"}
          color="secondary"
        >
          <LocalMallIcon color="primary" />
        </Badge>
      </BasketButton>
      <StyledContainer>
        <Main>
          <Wrapper isCardOpen={open}>
            <Heading secondary="true">Lista produktów </Heading>
            <ProductContext.Provider
              value={{
                shoppingList: shoppingList,
                products: products,
                dispatch: dispatch,
              }}
            >
              <ProductsList products={products} shoppingList={shoppingList} />
            </ProductContext.Provider>
          </Wrapper>
        </Main>
        <ProductContext.Provider
          value={{
            shoppingList: shoppingList,
            dispatch: dispatch,
            open: open,
            handleDrawer: setOpen,
            // quantity: countItemsInBasket,
          }}
        >
          <ShoppingCard />
        </ProductContext.Provider>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Products;
