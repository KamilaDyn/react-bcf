import React from "react";
import clsx from "clsx";
import { Head, Main, Footer } from "../../../../shared";
import { Heading, ProductsList, ShoppingCard } from "../../components";
import ProductContext from "./ProductContext";
import { Badge, IconButton, Container } from "@material-ui/core/";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { StyledIconButton, useStyles } from "./Product.style";
import { useGetProducts, useCountItems } from "./Products.utils";
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
      <Container className={classes.container}>
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
      </Container>
      <Footer />
    </>
  );
};

export default Products;
