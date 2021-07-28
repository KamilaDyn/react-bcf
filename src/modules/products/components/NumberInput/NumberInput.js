import React from "react";
import { Button, Input } from "@material-ui/core";
import { StyledInput, Wrapper } from "./index";

const NumberInput = ({
  index,
  decrement,
  increment,
  quantity,
  setQuantity,
}) => {
  return (
    <Wrapper>
      <Button variant="contained" onClick={() => decrement(index)}>
        -
      </Button>
      <StyledInput
        id="use_id"
        type="tel"
        required
        onChange={(e) => setQuantity(e.target.value)}
        variant="filled"
        value={quantity}
      />
      <Button variant="contained" onClick={() => increment(index)}>
        +
      </Button>
    </Wrapper>
  );
};

export default NumberInput;
