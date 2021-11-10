import React from "react";
import { Snackbar, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const InfoSnackbar = ({ message, openSnackbar, handleCloseSnackbar }) => {
  const action = (
    <IconButton
      size='small'
      aria-label='close'
      color='inherit'
      onClick={handleCloseSnackbar}
    >
      <CancelIcon fontSize='small' color='primary' />
    </IconButton>
  );
  return (
    <Snackbar
      open={openSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
      action={action}
      message={message}
    />
  );
};

export default InfoSnackbar;
