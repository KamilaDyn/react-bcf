import React from "react";
import { Field, Formik, Form } from "formik";
import {
  Grid,
  MenuItem,
  Typography,
  Box,
  LinearProgress,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import CancelIcon from "@material-ui/icons/Cancel";

import { StyledBox, StyledButton, Divider } from "./AddNewProductForm.style";
import {
  useAddNewProduct,
  categories,
  fieldsData,
} from "./AddNewProductForm.utils";

const AddNewProductForm = () => {
  const {
    productCategory,
    handleChange,
    SignupSchema,
    initialProductValues,
    onSubmit,
    setFieldValue,
    openSnackbar,
    handleCloseSnackbar,
  } = useAddNewProduct();
  const inputEl = React.useRef(null);

  const triggerClick = () => {
    inputEl.current.click();
  };

  const action = (
    <IconButton
      size='small'
      aria-label='close'
      color='inherit'
      onClick={handleCloseSnackbar}
    >
      <CancelIcon fontSize='small' color='primary' />
    </IconButton>
  );

  return (
    <StyledBox>
      <Formik
        initialValues={initialProductValues}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <Field
                  component={TextField}
                  name='name'
                  type='text'
                  label='Product name'
                />
              </Grid>
              <Grid item xs={6}>
                <Field
                  component={TextField}
                  name='category'
                  select
                  value={productCategory}
                  onChange={handleChange}
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
                  name='urlLink'
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
                    onChange={(event) => {
                      setFieldValue(event.currentTarget.files);
                    }}
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
                  Dodaj produkt
                </StyledButton>
              </Grid>
              {isSubmitting && <LinearProgress />}
            </Grid>
          </Form>
        )}
      </Formik>
      <Snackbar
        open={openSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        action={action}
        message='Dodałeś nowy produkt'
        severity='success'
      />
    </StyledBox>
  );
};

export default AddNewProductForm;
