import React from "react";
import { Button, Input } from "@material-ui/core";
import { useQuantity, useStyles } from "./index";

const NumberInput = ({
  index,
  decrement,
  increment,
  quantity,
  setQuantity,
}) => {
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
};

export default NumberInput;
