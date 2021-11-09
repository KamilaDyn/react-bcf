import React from "react";
import { Button } from "@material-ui/core";
import { StyledInput } from "./NumberInput.style";

const NumberInput = ({ decrement, increment, quantity, item }) => {
  return (
    <>
      <Button
        disabled={quantity === 1 ? true : false}
        onClick={() => {
          decrement(item);
        }}
      >
        -
      </Button>
      <StyledInput
        max='99'
        type='number'
        required
        value={quantity || ""}
        onChange={(e) => e.target.value}
      />
      <Button
        onClick={() => {
          increment(item);
        }}
        disabled={quantity === 99 ? true : false}
      >
        +
      </Button>
    </>
  );
};

export default NumberInput;
