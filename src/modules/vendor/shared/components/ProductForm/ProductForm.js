import React from "react";
import { Field, Formik, Form, useFormikContext } from "formik";
import {
  Grid,
  MenuItem,
  Typography,
  Box,
  LinearProgress,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { StyledBox, StyledButton, Divider } from "./ProductForm.style";
import { categories, fieldsData, SignupSchema } from "./ProductForm.util";
import { useAddNewProduct } from "../../../addNewProduct/utils";

const ProductForm = ({ onSubmit, handleChange, initialProductValues }) => {
   const inputEl = React.useRef(null);
  const triggerClick = () => {
    inputEl.current.click();
  };
 

  return (
    <StyledBox>
      <Formik
        initialValues={initialProductValues}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <Field
                  component={TextField}
                  name='title'
                  type='text'
                  label='Nazwa produktu'
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={TextField}
                  name='category'
                  select
                  onChange={handleChange}
                  value={initialProductValues.category}
                >
                  {categories.map((value) => (
                    <MenuItem key={value} value={value}>
                      {value}
                    </MenuItem>
                  ))}
                </Field>
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={TextField}
                  name='image'
                  type='text'
                  label='Link do obrazka'
                  placeholder='url link'
                />
              </Grid>
              <Grid item xs={6}>
                <StyledBox addImg typeIndex='0'>
                  <input
                    name='file'
                    ref={inputEl}
                    type='file'
                    multiple
                    typeIndex='-1'
                    accept='.jpeg,.jpg,.png,.gif'
                    hidden
                    // onChange={(event) => {
                    //   setFieldValue(event.currentTarget.files);
                    // }}
                  />
                  <Typography variant='h5' align='center'>
                    Przeciągnij i upuść obrazek tutaj
                  </Typography>
                  <Box display='flex' alignItems='center' margin={2}>
                    <Divider />
                    <Typography>lub</Typography>
                    <Divider />
                  </Box>
                  <StyledButton
                    sixe='medium'
                    variant='contained'
                    onClick={triggerClick}
                  >
                    Wybierz obraz
                  </StyledButton>
                  <Typography align='center'>
                    Rozmiar obrazka 200x200
                  </Typography>
                </StyledBox>
              </Grid>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name='description'
                  type='text'
                  label='Opis produktu'
                  placeholder='Opis produktu'
                  multiline
                  minRows={5}
                />
              </Grid>
              {fieldsData.map(({ name, type, label }) => (
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name={name}
                    type={type}
                    label={label}
                  />
                </Grid>
              ))}
              <Grid item container justifyContent='center'>
                <StyledButton
                  variant='contained'
                  color='primary'
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  {initialProductValues.title === ""
                    ? "Dodaj produkt"
                    : "Edytuj produkt"}
                </StyledButton>
              </Grid>
              {isSubmitting && <LinearProgress />}
            </Grid>
          </Form>
        )}
      </Formik>
    </StyledBox>
  );
};

export default ProductForm;
