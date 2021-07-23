import React from "react";
import { Button, Input, IconButton, Tooltip } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStyles } from "./AddProductForm.style";
import { withHook } from "../../../../withHook/withHook";
import { AddProductFormUtils } from "./AddProductFrom.utils";

const AddProductForm = (props) => {
  const {
    index,
    id,
    handleSubmit,
    increment,
    decrement,
    quantity,
    setQuantity,
  } = props;
  const classes = useStyles();

  return (
    <form className={classes.container} onSubmit={(e) => handleSubmit(e, id)}>
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
      <IconButton aria-label="share" type="submit" className={classes.button}>
        <Tooltip title="Dodaj do koszyka" placement="top">
          <ShoppingCartIcon color="primary" style={{ fontSize: 40 }} />
        </Tooltip>
      </IconButton>
    </form>
  );
};

export default withHook(AddProductFormUtils, AddProductForm);
