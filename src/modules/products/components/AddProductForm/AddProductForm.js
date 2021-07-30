import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NumberInput } from "../NumberInput";
import { useQuantity } from "../NumberInput/NumberInput.utils";
import { useAddProduct } from "./AddProductForm.utils";

const AddProductForm = ({ id, index, products, dispatch, shoppingList }) => {
  const { handleSubmit } = useAddProduct();
  const { quantity, setQuantity, increment, decrement } = useQuantity();
  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, id, quantity, products, shoppingList, dispatch)
      }
    >
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
