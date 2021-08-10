import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import { StyledButton } from "../products/components/atoms";
import { Image, Form } from "./LoginForm.style";
import { googleIcon } from "../../assets";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Grid container spacing={7} justifyContent="center">
        <Grid item xs={12}>
          <TextField
            //   error
            id="email"
            name="email"
            label="example@email.com"
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            //   error
            id="password"
            name="password"
            type="password"
            label="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Grid>
        <Grid item container spacing={2} xs={12} justifyContent="center">
          <Grid item xs={12} justifyContent="center">
            <StyledButton type="submit" submitForm>
              Submit
            </StyledButton>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">lub</Typography>
          </Grid>

          <Grid item xs={12} justifyContent="center">
            <StyledButton type="button" google>
              <Image src={googleIcon} alt="googleIcon" />
              Zaloguj przez Google
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
};

export default LoginForm;
