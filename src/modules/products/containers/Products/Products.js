import React from "react";
import clsx from "clsx";
import { Head, Main, Footer } from "../../../../shared";
import { withHook } from "../../../../withHook/withHook";
import { Heading, ProductsList, ShoppingCard } from "../../components";
import ProductContext from "./ProductContext";
import { ProductComponentState } from "./ProductComponentState";
import { Badge, IconButton, Container } from "@material-ui/core/";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import { useStyles } from "./Product.style";
const Products = (props) => {
  const {
    products,
    open,
    setOpen,
    countItemsInBasket,
    dispatch,
    shoppingList,
  } = props;
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
          className={clsx(open && classes.hide)}
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

export default withHook(ProductComponentState, Products);
