import React from "react";
import { Dialog, Grid, Link, Typography } from "@material-ui/core";
import { MuiDialogTitle } from "../molecules/DialogTitle";
import { LoginForm } from "../../../loginForm";
import { ResetContainer } from "./Dialog.style";

const MuiDialog = ({ openDialog, handleCloseDialog }) => {
  return (
    <Dialog
      onClose={handleCloseDialog}
      aria-labelledby="customized-dialog-title"
      open={openDialog}
    >
      <MuiDialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>
        Witaj w sklepie Bazarek!
        <Typography variant="subtitle1">Wpisz Swój email i hasło</Typography>
      </MuiDialogTitle>
      <LoginForm />
      <Grid container alignItems="center" spacing={3}>
        <Grid item container xs={12} justifyContent="center">
          <Typography color="secondary">Nie masz konta? </Typography>&nbsp;
          <Link href="#">Zarejestruj</Link>
        </Grid>
        <ResetContainer
          item
          container
          xs={12}
          alignItems="center"
          justifyContent="center"
          background="secondary"
        >
          <Typography color="secondary">Zapomniałeś hasła? </Typography>
          &nbsp;
          <Link href="#">Zresetuj</Link>
        </ResetContainer>
      </Grid>
    </Dialog>
  );
};

export default MuiDialog;
