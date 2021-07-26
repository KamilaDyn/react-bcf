import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStyles } from "./AddProductForm.style";
import { useAddProductFormData } from "./AddProductForm.utils";
import NumberInput from "../NumberInput/NumberInput";

const AddProductForm = ({ id, index }) => {
  const { handleSubmit } = useAddProductFormData();

  const classes = useStyles();

  return (
    <form className={classes.container} onSubmit={(e) => handleSubmit(e, id)}>
      <NumberInput index={index} />
      <IconButton aria-label="share" type="submit" className={classes.button}>
        <Tooltip title="Dodaj do koszyka" placement="top">
          <ShoppingCartIcon color="primary" style={{ fontSize: 40 }} />
        </Tooltip>
      </IconButton>
    </form>
  );
};

export default AddProductForm;
