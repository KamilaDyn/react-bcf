import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NumberInput } from "../index";
import { useQuantity } from "../numberInput/NumberInput.utils";
import { useStyles } from "./AddProductForm.style";
import { useAddProduct } from "./AddProductForm.utils";

const AddProductForm = ({ id, index }) => {
  const { handleSubmit } = useAddProduct();
  const { quantity } = useQuantity();

  const classes = useStyles();

  return (
    <form className={classes.container} onSubmit={(e) => handleSubmit(e, id)}>
      <NumberInput index={index} quantity={quantity} />
      <IconButton aria-label="share" type="submit" className={classes.button}>
        <Tooltip title="Dodaj do koszyka" placement="top">
          <ShoppingCartIcon color="primary" style={{ fontSize: 40 }} />
        </Tooltip>
      </IconButton>
    </form>
  );
};

export default AddProductForm;
