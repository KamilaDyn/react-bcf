import React from "react";
import { DialogTitle, Typography } from "@material-ui/core";
import { CloseButton } from "./DialogTitle.style";
import CloseIcon from "@material-ui/icons/Close";
const MuiDialogTitle = ({ children, onClose }) => {
  return (
    <DialogTitle disableTypography>
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
