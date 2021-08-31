import React from "react";
import { TextField } from "formik-material-ui";
import { Button, Box,LinearProgress } from "@material-ui/core";
import { Field,Form, Formik } from "formik";
import { useAddNewProduct } from "./AddNewProductForm.utils";

const AddNewProductForm = () => {
  const { initialValues, onSubmit, SubmitSchema } = useAddNewProduct();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SubmitSchema}
      onSubmit={onSubmit}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
    <Box pt='3rem' px='3.75rem' pb='1rem'>
          <Field
            component={TextField}
            name="productName"
            type="text"
            label="Nazwa Produktu"
          />
          <br />
          <Field
            component={TextField}
            type="text"
            label="Kategoria"
            name="category"
          />
          <br />
          <Field
            min="00.01"
            component={TextField}
            type="number"
            label="Cena"
            name="price"
          />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Dodaj Produkt
          </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewProductForm;
