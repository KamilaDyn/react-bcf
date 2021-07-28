import React from "react";
import { Badge, IconButton, Container } from "@material-ui/core/";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { Head, Main, Footer } from "../../../../shared";
import {
  Heading,
  ProductsList,
  ShoppingCard,
  ProductContext,
} from "../../components";
import {
  useStyles,
  useGetProducts,
  useCountItems,
  StyledContainer,
} from "./index";
import {} from "./Products.style";

const Products = () => {
  const { products, open, setOpen } = useGetProducts();
  const { shoppingList, dispatch, countItemsInBasket } = useCountItems();
  const classes = useStyles();
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
          <Heading>Lista produktów </Heading>
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
