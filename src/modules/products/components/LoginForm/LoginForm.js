import React from "react";
import { Box,Container, Grid, LinearProgress, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Field, Formik, Form } from "formik";
import { googleIcon } from "../../../../assets";
import {StyledButton } from "../atoms";
import { Image } from "./LoginForm.style";
import { useLoginForm } from "./LoginForm.utils";

const LoginForm = () => {
  const { initialValues, onSubmit, SignupSchema } = useLoginForm();

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
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container item>
              <Field
                component={TextField}
                name="email"
                type="email"
                label="Email"
              />
            </Grid>

            <Grid container item>
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
              />
              {isSubmitting && <LinearProgress />}
            </Grid>

            <Grid item container justifyContent="center">
              <StyledButton
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                style={{ width: "100%" }}
              >
                Zaloguj
              </StyledButton>
            </Grid>

            <Container>
              <Typography align="center">lub</Typography>
            </Container>

            <Grid item container justifyContent="center">
              <StyledButton
                type="button"
                color="secondary"
                variant="contained"
                google
              >
                <Image src={googleIcon} alt="googleIcon" />
                Zaloguj przez Google
              </StyledButton>
            </Grid>
          </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
