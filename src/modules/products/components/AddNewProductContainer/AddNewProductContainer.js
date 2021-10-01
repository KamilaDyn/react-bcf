import React from "react";
import { Dialog } from "@material-ui/core";
import { MuiDialogTitle } from "../../../../shared/molecules/DialogTitle";
import { AddNewProductForm } from "../AddNewProductForm";

const AddNewProductContainer = ({ openProductForm, setOpenProductForm }) => {
  return (
    <Dialog
      onClose={() => {
        setOpenProductForm(false);
      }}
      aria-labelledby='customized-dialog-title2'
      open={openProductForm}
    >
      <MuiDialogTitle
        id='customized-dialog-title2'
        onClose={() => setOpenProductForm(false)}
      >
        Dodaj nowy produkt
      </MuiDialogTitle>
      <AddNewProductForm />
    </Dialog>
  );
};

export default AddNewProductContainer;
