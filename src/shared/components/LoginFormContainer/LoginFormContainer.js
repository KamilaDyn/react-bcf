import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Grid, Link, Typography } from "@material-ui/core";
import { MuiDialogTitle } from "../../../shared";
import { LoginForm } from "../LoginForm";
import { ResetContainer } from "./LoginFormContainer.style";
import { closeLoginForm } from "../../../loginProvider/actions";

const LoginFormContainer = () => {
  const currentLoginState = useSelector(
    (state) => state.loggingForm.loginState
  );
  const dispatch = useDispatch();
  return (
    <Dialog
      onClose={() => dispatch(closeLoginForm())}
      aria-labelledby='customized-dialog-title'
      open={currentLoginState}
    >
      <>
        <MuiDialogTitle
          id='customized-dialog-title'
          onClose={() => dispatch(closeLoginForm())}
        >
          Witaj w sklepie Bazarek!
          <Typography variant='subtitle1'>Wpisz Swój email i hasło</Typography>
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
    </Dialog>
  );
};

export default LoginFormContainer;
