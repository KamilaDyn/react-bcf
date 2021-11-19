import React from "react";
import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";

const InfoDialog = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>
        Gratulacje zostałeś zarejestrowany
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoDialog;
