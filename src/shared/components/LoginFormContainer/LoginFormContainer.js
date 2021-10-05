import React from "react";
import { Dialog, Grid, Link, Typography } from "@material-ui/core";
import { useAuthState } from "../../../loginProvider";
import { MuiDialogTitle } from "../../../shared";
import { LoginForm } from "../LoginForm";
import { StyledButton } from "../../atoms";
import { useHandleLoginOut } from "./LoginFormContainer.utils";
import { ResetContainer } from "./LoginFormContainer.style";

const LoginFormContainer = ({ openDialog, setOpenDialog, user }) => {
  const { stateContext } = useAuthState();
  const { handleLoginOut } = useHandleLoginOut();
  return (
    <Dialog
      onClose={() => setOpenDialog(false)}
      aria-labelledby='customized-dialog-title'
      open={openDialog}
    >
      {!stateContext.isLoggedIn ? (
        <>
          <MuiDialogTitle
            id='customized-dialog-title'
            onClose={() => setOpenDialog(false)}
          >
            Witaj w sklepie Bazarek!
            <Typography variant='subtitle1'>
              Wpisz Swój email i hasło
            </Typography>
          </MuiDialogTitle>
          <LoginForm />
          <Grid container alignItems='center' spacing={3}>
            <Grid item container xs={12} justifyContent='center'>
              <Typography color='secondary'>Nie masz konta? </Typography>&nbsp;
              <Link href='#'>Zarejestruj</Link>
            </Grid>
            <ResetContainer
              item
              container
              xs={12}
              alignItems='center'
              justifyContent='center'
              background='secondary'
            >
              <Typography color='secondary'>Zapomniałeś hasła? </Typography>
              &nbsp;
              <Link href='#'>Zresetuj</Link>
            </ResetContainer>
          </Grid>
        </>
      ) : (
        <>
          <MuiDialogTitle
            id='customized-dialog-title'
            onClose={() => setOpenDialog(false)}
          >
            {stateContext.isLoggedIn &&
              ` Witaj ${stateContext.user.split("@")[0]} w sklepie Bazarek!`}
          </MuiDialogTitle>
          <StyledButton onClick={handleLoginOut}>Wyloguj się </StyledButton>
        </>
      )}
    </Dialog>
  );
};

export default LoginFormContainer;
