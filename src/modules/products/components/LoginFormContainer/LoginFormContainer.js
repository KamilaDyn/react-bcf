import React from "react";
import { Dialog, Grid, Link, Typography } from "@material-ui/core";
import { MuiDialogTitle } from "../molecules/DialogTitle";
import { LoginForm } from "../LoginForm";
import { ResetContainer } from "./LoginFormContainer.style";
import { useAuth } from "../../../../AuthProvider";
import { StyledButton } from "../atoms";
const LoginFormContainer = ({ openDialog, setOpenDialog }) => {
  const { isLoggedIn, logout, user } = useAuth();
  return (
    <Dialog
      onClose={() => setOpenDialog(false)}
      aria-labelledby="customized-dialog-title"
      open={openDialog}
    >
      {!isLoggedIn ? (
        <>
          <MuiDialogTitle
            id="customized-dialog-title"
            onClose={() => setOpenDialog(false)}
          >
            Witaj w sklepie Bazarek!
            <Typography variant="subtitle1">
              Wpisz Swój email i hasło
            </Typography>
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
        </>
      ) : (
        <>
          <MuiDialogTitle
            id="customized-dialog-title"
            onClose={() => setOpenDialog(false)}
          >
            Witaj {user.split("@")[0]} w sklepie Bazarek!
          </MuiDialogTitle>
          <StyledButton onClick={logout}>Wyloguj się </StyledButton>
        </>
      )}
    </Dialog>
  );
};

export default LoginFormContainer;
