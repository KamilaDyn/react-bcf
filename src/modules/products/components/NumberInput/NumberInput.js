import React from "react";
import { Button } from "@material-ui/core";
import { StyledInput, Wrapper } from "./NumberInput.style";

const NumberInput = ({
  index,
  decrement,
  increment,
  quantity,
  setQuantity,
  id,
}) => {
  return (
    <Wrapper>
      <Button onClick={() => decrement(index)}>-</Button>
      <StyledInput
        id={id}
        type="tel"
        required
        onChange={(e) => setQuantity(e.target.value)}
        variant="filled"
        value={quantity}
      />
      <Button onClick={() => increment(index)}>+</Button>
    </Wrapper>
  );
};

export default NumberInput;
