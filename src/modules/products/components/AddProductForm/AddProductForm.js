import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NumberInput, useQuantity } from "../NumberInput";
import { useAddProduct } from "./AddProductForm.utils";

const AddProductForm = ({ id, index }) => {
  const { handleSubmit } = useAddProduct();
  const { quantity, setQuantity, increment, decrement } = useQuantity();

  return (
    <form onSubmit={(e) => handleSubmit(e, id, quantity)}>
      <NumberInput
        index={index}
        quantity={quantity}
        setQuantity={setQuantity}
        increment={increment}
        decrement={decrement}
      />
      <IconButton type="submit">
        <Tooltip title="Dodaj do koszyka" placement="top">
          <ShoppingCartIcon color="primary" style={{ fontSize: 40 }} />
        </Tooltip>
      </IconButton>
    </form>
  );
};

export default AddProductForm;
