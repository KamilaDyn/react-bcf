import React from "react";
import { TextField } from "formik-material-ui";
import { Button, LinearProgress } from "@material-ui/core";
import { Field, Formik } from "formik";
import { Form } from "../../../../shared";
import { useAddNewProduct } from "./AddNewProductForm.utils";

const AddNewProductForm = () => {
  const { initialValues, onSubmit, submitForm } = useAddNewProduct();
  return (
    <Formik
      initialValues={initialValues}
      validate={submitForm}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name='productName'
            type='text'
            label='Nazwa Produktu'
          />
          <br />
          <Field
            component={TextField}
            type='text'
            label='Kategoria'
            name='category'
          />
          <br />
          <Field
            min='00.01'
            component={TextField}
            type='number'
            label='Cena'
            name='price'
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant='contained'
            color='primary'
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Dodaj Produkt
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewProductForm;
