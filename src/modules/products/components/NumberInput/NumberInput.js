import React from "react";
import { Button } from "@material-ui/core";
import { StyledInput } from "./NumberInput.style";

const NumberInput = ({
  index,
  decrement,
  increment,
  quantity,
  setQuantity,
  id,
}) => {
  return (
    <>
      <Button onClick={() => decrement(index)}>-</Button>
      <StyledInput
        id={id}
        type="number"
        required
        onChange={(e) => setQuantity(Number(e.target.value))}
        value={quantity}
      />
      <Button onClick={() => increment(index)}>+</Button>
    </>
  );
};

export default NumberInput;
