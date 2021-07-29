import React from "react";
import { Badge, IconButton } from "@material-ui/core/";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Head, Main, Footer } from "../../../../shared";
import { ProductContext } from "../../components";
import { ShoppingCard, ProductsList } from "../../components";
import { Heading } from "../../components/atoms";
import { StyledContainer } from "./Products.style";
import { useGetProducts, useCountItems } from "./Products.utils";

const Products = () => {
  const { products, open, setOpen } = useGetProducts();
  const { shoppingList, dispatch, countItemsInBasket } = useCountItems();
  return (
    <>
      <Head>
        Sklep dla każdego
        <IconButton
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
        </IconButton>
      </Head>
      <StyledContainer>
        <Main>
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
