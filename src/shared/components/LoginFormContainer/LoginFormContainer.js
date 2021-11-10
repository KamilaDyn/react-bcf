import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog, Grid, Link, Typography } from "@mui/material";
import { selectors, actions } from "store";
import { routes } from "config/routes";
import { MuiDialogTitle } from "shared/molecules";
import { LoginForm } from "../LoginForm";
import { ResetContainer } from "./LoginFormContainer.style";

const LoginFormContainer = () => {
  const currentLoginState = useSelector(selectors.login.getLoginState);
  const dispatch = useDispatch();

  return (
    <Dialog
      onClose={() => dispatch(actions.login.closeLoginForm())}
      aria-labelledby='customized-dialog-title'
      open={currentLoginState || false}
    >
      <>
        <MuiDialogTitle
          id='customized-dialog-title'
          onClose={() => dispatch(actions.login.closeLoginForm())}
        >
          Witaj w sklepie Bazarek!
          <Typography variant='subtitle1'>Wpisz Swój email i hasło</Typography>
        </MuiDialogTitle>
        <LoginForm />
        <Grid container alignItems='center' spacing={3}>
          <Grid item container xs={12} justifyContent='center'>
            <Typography color='secondary'>Nie masz konta? </Typography>&nbsp;
            <Link href={routes.signup}>Zarejestruj</Link>
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
