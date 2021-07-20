import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Heading from "../components/atoms/Heading";
import Head from "../components/layout/Head";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import ProductList from "../components/cards/ProductList";
import Sidebar from "../components/layout/Sidebar";

import { makeStyles } from "@material-ui/core/styles";
import {
  Badge,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import DeleteIcon from "@material-ui/icons/Delete";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 100px);
  width: 95%;
  margin: 50px auto 0;
  position: relative;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "inline-block",
  },
  noitems: {
    textAlign: "center",
    padding: "20px 0",
  },
}));

const Products = () => {
  const [products, setProducts] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  const increment = (index, price) => {
    const currentItems = [...shoppingList];
    currentItems[index].count++;
    currentItems[index].price = currentItems[index].price + price;
    setShoppingList(currentItems);
  };

  const handleClick = (id) => {
    let product = products.filter((item) => {
      return item.id === id;
    });
    let price = product[0].price;
    const itemId = shoppingList.find((item) => item.id === product[0].id);
    if (!itemId) {
      setShoppingList([
        ...shoppingList,
        { id: id, name: product[0].title, count: "1", price: product[0].price },
      ]);
    } else {
      let objIndex = shoppingList.findIndex((obj) => obj.id === id);
      increment(objIndex, price);
      console.log(price);
    }
  };

  const deleteProduct = (id) => {
    const newShoppingList = shoppingList.filter((el) => el.id !== id);
    setShoppingList(newShoppingList);
  };
  const classes = useStyles();

  return (
    <>
      <Head>Sklep dla każdego</Head>
      <Wrapper>
        <Main>
          <Heading>Lista produktów</Heading>
          <ProductList click={handleClick} products={products} />
        </Main>
        <Sidebar>
          <Heading>Twoje produkty</Heading>
          {shoppingList.length > 0 ? (
            <List className={classes.root}>
              {shoppingList.map((item) => (
                <ListItem key={item.id} id={item.id}>
                  <ListItemText
                    primary={item.name}
                    secondary={item.price + "$"}
                  ></ListItemText>
                  <ListItemIcon>
                    <Badge badgeContent={item.count} color="secondary">
                      <ShoppingBasketOutlinedIcon color="primary" />
                    </Badge>
                  </ListItemIcon>
                  <IconButton onClick={() => deleteProduct(item.id)}>
                    <DeleteIcon color="primary" />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography paragraph className={classes.noitems}>
              Nie wybrałeś jeszcze żadnego produktu
            </Typography>
          )}
        </Sidebar>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Products;
