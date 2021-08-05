import React from "react";
import { Badge, Typography } from "@material-ui/core/";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Head, Main, Footer } from "../../../../shared";
import { ProductContext } from "../../../context";
import { ShoppingCard, ProductsList } from "../../components";
import { StyledContainer, Wrapper } from "./Products.style";
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
        <Badge
          color="primary"
          badgeContent={shoppingList.length > 0 ? countItemsInBasket() : "0"}
        >
          <LocalMallIcon color="secondary" />
        </Badge>
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
