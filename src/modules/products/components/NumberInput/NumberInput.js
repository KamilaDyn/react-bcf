import React from "react";
import { Button } from "@material-ui/core";
import { StyledButton } from "../atoms";
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
      <StyledButton onClick={() => decrement(index)}>-</StyledButton>
      <StyledInput
        id={id}
        type="tel"
        required
        onChange={(e) => setQuantity(e.target.value)}
        variant="filled"
        value={quantity}
      />
      <StyledButton onClick={() => increment(index)}>+</StyledButton>
    </Wrapper>
  );
};

export default NumberInput;
