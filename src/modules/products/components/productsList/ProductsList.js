import React from "react";

import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Collapse,
  CardActions,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";

import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
    maxWidth: 345,
    margin: "15px 20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundPosition: "center",
    backgroundSize: "contain",
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
  },
  price: {
    fontSize: "42px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ProductsList = ({ addHandler, products, shoppingList }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = (id) => {
    let product = products.filter((item) => {
      return item.id === id;
    });
    const itemId = shoppingList.find((item) => item.id === product[0].id);
    console.log(itemId);
    if (!itemId) {
      const productItem = {
        id: id,
        name: product[0].title,
        count: "1",
        price: product[0].price,
      };
      console.log(productItem);
      addHandler({ type: "ADD", productItem });
    } else {
      //  let objIndex = products.findIndex((obj) => obj.id === id);
      // increment(objIndex, price);
      // console.log(price);
    }
  };

  return (
    <Wrapper>
      {products.map((p, index) => (
        <Card key={index} className={classes.root}>
          <CardHeader title={p.title} subheader={p.category} />
          <CardMedia
            image={p.image}
            title={p.title}
            className={classes.media}
            alt={p.title}
          />
          <CardActions className={classes.actions}>
            <Typography color="secondary" className={classes.price}>
              {p.price}$
            </Typography>
            <IconButton
              aria-label="share"
              onClick={() => handleClick(p.id)}
              className={classes.button}
            >
              <Tooltip title="Dodaj do koszyka" placement="top">
                <ShoppingCartIcon color="primary" style={{ fontSize: 40 }} />
              </Tooltip>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2" color="textSecondary" paragraph>
                {p.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Wrapper>
  );
};

export default ProductsList;
