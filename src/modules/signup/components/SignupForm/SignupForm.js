import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { Box, Grid, Typography, Link } from "@mui/material";
import { actions, selectors } from "store";
import { StyledButton } from "shared/atoms";
import { RegisterBySocialMedia } from "../RegisterBySocialMedia";
import { useSignUpForm, SignupSchema, signupFields } from "./SignupForm.utils";
import { LoginButton } from "./SignupForm.style";

const SignupForm = () => {
  const { initialValues, onSubmit } = useSignUpForm();
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectors.auth.getErrorMessage);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box pt='3rem' px='3.75rem' pb='1rem'>
            <Grid
              container
              spacing={3}
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              {signupFields.map((field) => (
                <Grid container item key={field.id}>
                  <Field
                    fullWidth
                    component={TextField}
                    name={field.name}
                    type={field.type}
                    label={field.label}
                    variant='outlined'
                  />
                </Grid>
              ))}

              <Grid item container justifyContent='center'>
                <StyledButton
                  register
                  variant='contained'
                  color='primary'
                  onClick={submitForm}
                >
                  Zarejestruj
                </StyledButton>
              </Grid>
              {errorMessage && (
                <Grid>
                  <Typography variant='subtitle2' color='primary'>
                    {errorMessage}
                  </Typography>
                </Grid>
              )}

              <RegisterBySocialMedia />
              <Grid container alignItems='center' spacing={3}>
                <Grid item container xs={12} justifyContent='center'>
                  <Typography color='secondary'>Masz już konto ? </Typography>
                  &nbsp;
                  <LoginButton
                    onClick={() => {
                      dispatch(actions.login.openLoginForm());
                    }}
                  >
                    Zaloguj
                  </LoginButton>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  alignItems='center'
                  justifyContent='center'
                >
                  <Typography color='secondary' align='center'>
                    Zapomniałeś hasła?
                  </Typography>
                  &nbsp;
                  <Link href='#'>Zresetuj</Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
