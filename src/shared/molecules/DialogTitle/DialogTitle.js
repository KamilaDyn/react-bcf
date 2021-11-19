import React from "react";
import { DialogTitle, Typography } from "@mui/material";
import { CloseButton } from "./DialogTitle.style";
import CloseIcon from "@mui/icons-material/Close";
const MuiDialogTitle = ({ children, onClose }) => {
  return (
    <DialogTitle>
      <Typography variant="h3" color="secondary">
        {children}
      </Typography>
      <CloseButton aria-label="close" onClick={onClose}>
        <CloseIcon />
      </CloseButton>
    </DialogTitle>
  );
};

export default MuiDialogTitle;
