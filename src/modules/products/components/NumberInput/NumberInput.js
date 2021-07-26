import React, { forwardRef } from "react";
import { useQuantity } from "./NumberInput.utils";
import { Button, Input } from "@material-ui/core";
import { useStyles } from "./NumberInput.style";

const NumberInput = ({index} )=> {
  const { quantity, decrement, increment, setQuantity } = useQuantity();
 
  const classes = useStyles();
  return (
    <>
      <Button variant="contained" onClick={() => decrement(index)}>
        -
      </Button>
      <Input
        id="use_id"
        type="tel"
        required
        onChange={(e) => setQuantity(e.target.value)}
        variant="filled"
        value={quantity}
        inputProps={{
          className: classes.input,
          max: 12,
        }}
      
      />
      <Button variant="contained" onClick={() => increment(index)}>
        +
      </Button>
    </>
  );
});

export default NumberInput;
