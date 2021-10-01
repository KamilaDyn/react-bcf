import React from "react";
import { Tooltip } from "@material-ui/core";
import { NumberInput, useQuantity } from "../NumberInput";
import { useAddProduct } from "./AddProductForm.utils";
import { Form, StyledShoppingCardIcon } from "./AddProductForm.style";
import { StyledIconButton } from "../../../../shared";

const AddProductForm = ({ id, index }) => {
  const { handleSubmit } = useAddProduct();
  const { quantity, setQuantity, increment, decrement } = useQuantity();

  return (
    <Form onSubmit={(e) => handleSubmit(e, id, quantity)}>
      <NumberInput
        id='form_id'
        index={index}
        quantity={quantity}
        setQuantity={setQuantity}
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
