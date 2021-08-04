import React from "react";
import { Button, ThemeProvider } from "@material-ui/core";
import { StyledInput, Wrapper } from "./NumberInput.style";
import { theme } from "../../../../theme";

const NumberInput = ({
  index,
  decrement,
  increment,
  quantity,
  setQuantity,
  id,
}) => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default NumberInput;
