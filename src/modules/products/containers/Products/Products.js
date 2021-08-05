import React from "react";
import { Typography } from "@material-ui/core/";
import { Head, Main, Footer } from "../../../../shared";
import { ProductContext } from "../../../context";
import { ShoppingCard, ProductsList } from "../../components";
import {
  StyledBadge,
  StyledLocalMallIcon,
  StyledContainer,
  Wrapper,
} from "./Products.style";
import { useGetProducts, useCountItems } from "./Products.utils";
import { StyledIconButton } from "../../components/atoms";

const Products = () => {
  const { products, open, setOpen } = useGetProducts();
  const { shoppingList, dispatch, countItemsInBasket } = useCountItems();
  return (
    <>
      <Head>Sklep dla każdego</Head>
      <StyledIconButton
        basket="true"
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={() => setOpen(!open)}
      >
        <StyledBadge
          color="primary"
          badgeContent={shoppingList.length > 0 ? countItemsInBasket() : "0"}
        >
          <StyledLocalMallIcon />
        </StyledBadge>
      </StyledIconButton>
      <StyledContainer>
        <Main>
          <Wrapper isCardOpen={open}>
            <Typography variant="h2">Lista Produktów</Typography>
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
