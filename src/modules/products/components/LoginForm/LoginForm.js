import React from "react";
import { Container, Grid, LinearProgress, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Field, Formik } from "formik";
import { googleIcon } from "../../../../assets";
import { Form } from "../atoms";
import { Image } from "./LoginForm.style";
import { StyledButton } from "../atoms";
import { useLoginForm } from "./LoginForm.utils";

const LoginForm = () => {
  const { initialValues, onSubmit, SubmitSchema } = useLoginForm();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SubmitSchema}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
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
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
