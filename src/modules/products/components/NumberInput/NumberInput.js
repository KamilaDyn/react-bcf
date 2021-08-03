import React from "react";
import { StyledButton, StyledInput, Wrapper } from "./NumberInput.style";

const NumberInput = ({
  index,
  decrement,
  increment,
  quantity,
  setQuantity,
}) => {
  return (
    <Wrapper>
      <StyledButton onClick={() => decrement(index)}>-</StyledButton>
      <StyledInput
        type="tel"
        required
        onChange={(e) => setQuantity(e.target.value)}
        variant="filled"
        value={quantity}
        custom="true"
      />
      <StyledButton onClick={() => increment(index)}>+</StyledButton>
    </Wrapper>
  );
};

export default NumberInput;
