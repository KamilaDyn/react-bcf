import React, { useState, useContext } from "react";
import { Button, Input, IconButton, Tooltip } from "@material-ui/core";
import { ProductContext } from "../index";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStyles } from "./AddProductForm.style";

const AddProductForm = ({ index, id }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const productContext = useContext(ProductContext);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const handleSubmit = (e, id) => {
    let product = productContext.products.filter((item) => {
      return item.id === id;
    });
    setPrice(product[0].price);
    const productItem = {
      id: id,
      name: product[0].title,
      count: quantity,
      price: product[0].price * quantity,
    };
    const itemId = productContext.shoppingList.find((item) => item.id === id);
    if (!itemId) {
      productContext.dispatch({ type: "ADD", productItem });
    } else {
      const currentItems = [...productContext.shoppingList];
      const findItem = currentItems.find((item) => item.id === id);
      findItem.count = findItem.count + quantity;
      findItem.price = findItem.price + price * quantity;
      productContext.dispatch({ type: "INCREMENT" });
    }
    e.preventDefault();
  };

  return (
    <form className={classes.container} onSubmit={(e) => handleSubmit(e, id)}>
      <Button variant="contained" onClick={() => decrement(index)}>
        -
      </Button>
      <Input
        id="use_id"
        type="tel"
        required
        onChange={(e) => setQuantity(e.target.value)}
        variant="filled"
        value={quantity}
        inputProps={{
          className: classes.input,
          max: 12,
        }}
      />
      <Button variant="contained" onClick={() => increment(index)}>
        +
      </Button>
      <IconButton aria-label="share" type="submit" className={classes.button}>
        <Tooltip title="Dodaj do koszyka" placement="top">
          <ShoppingCartIcon color="primary" style={{ fontSize: 40 }} />
        </Tooltip>
      </IconButton>
    </form>
  );
};

export default AddProductForm;
