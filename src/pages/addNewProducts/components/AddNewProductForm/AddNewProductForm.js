import React from "react";
import { Field, Formik, Form } from "formik";
import {
  Grid,
  MenuItem,
  Typography,
  Box,
  LinearProgress,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";

import { StyledBox, StyledButton, Divider } from "./AddNewProductForm.style";
import { useAddNewProduct } from "./AddNewProduct.utils";

const categories = [
  {
    value: "Odzież męska",
  },
  {
    value: "Odzież damska",
  },
  {
    value: "Biżuteria",
  },
  {
    value: "Elektronika",
  },
];

const AddNewProductForm = () => {
  const {
    category,
    handleChange,
    SignupSchema,
    initialProductValues,
    onSubmit,
    setFieldValue,
  } = useAddNewProduct();
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
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <Grid container spacing={6}>
              <Grid container item justifyContent='space-between' spacing={3}>
                <Grid container justifyContent='space-between' spacing={3}>
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
                      value={category}
                      onChange={handleChange}
                      type='dropdownlist'
                    >
                      {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
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
              <Grid
                item
                container
                justifyContent='space-between'
                spacing={3}
                rowSpacing={5}
              >
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name='tags'
                    type='text'
                    label='Tags'
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name='stock'
                    type='number'
                    label='Ilość'
                  ></Field>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent='space-between'
                spacing={3}
                rowSpacing={5}
              >
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name='regularPrice'
                    type='number'
                    label='Cena'
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    component={TextField}
                    name='salePrice'
                    type='number'
                    label='Cena promocyjna'
                  ></Field>
                </Grid>
              </Grid>
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
    </StyledBox>
  );
};

export default AddNewProductForm;
