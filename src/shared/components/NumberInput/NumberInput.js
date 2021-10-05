import React from "react";
import { Button } from "@material-ui/core";
import { StyledInput } from "./NumberInput.style";

const NumberInput = ({
  index,
  decrement,
  increment,
  quantity,
  setQuantity,
}) => {
  return (
    <>
      <Button
        disabled={quantity === 1 ? true : false}
        onClick={() => {
          decrement(index);
        }}
      >
        -
      </Button>
      <StyledInput
        max='99'
        type='number'
        required
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      />
      <Button
        onClick={() => {
          increment(index);
        }}
        disabled={quantity === 99 ? true : false}
      >
        +
      </Button>
    </>
  );
};

export default NumberInput;