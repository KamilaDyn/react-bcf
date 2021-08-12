import React from "react";
import { Container, Typography } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { Button, LinearProgress } from "@material-ui/core";
import { Field, Formik } from "formik";
import { googleIcon } from "../../../../assets";
import { useAuth } from "../../../../AuthProvider";
import { Form } from "../atoms";
import { Image } from "./LoginForm.style";

const LoginForm = () => {
  const { login } = useAuth();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Wpisz email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Adres email musi zawierać @";
        } else if (values.password.length < 6) {
          errors.password = "Hasło musi zawierać min 6 znaków";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          login(values.email);
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
          />
          <br />
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Zaloguj
          </Button>
          <Container>
            <Typography align="center">lub</Typography>
          </Container>

          <Button type="button" color="secondary" variant="contained">
            <Image src={googleIcon} alt="googleIcon" />
            Zaloguj przez Google
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
