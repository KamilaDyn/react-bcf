import React from "react";
import { Tooltip } from "@mui/material";
import { NumberInput } from "../NumberInput";
import { StyledIconButton } from "../../atoms";
import { useAddProduct, useQuantity } from "./AddProductForm.utils";
import { Form, StyledShoppingCardIcon } from "./AddProductForm.style";

const AddProductForm = ({ id }) => {
  const { handleSubmit } = useAddProduct();
  const { quantity, increment, decrement } = useQuantity();

  return (
    <Form onSubmit={(e) => handleSubmit(e, id, quantity)}>
      <NumberInput
        id='form_id'
        quantity={quantity}
        increment={increment}
        decrement={decrement}
      />
      <StyledIconButton type='submit'>
        <Tooltip title='Dodaj do koszyka' placement='top'>
          <StyledShoppingCardIcon />
        </Tooltip>
      </StyledIconButton>
    </Form>
  );
};

export default AddProductForm;
