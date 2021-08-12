import React from "react";
import { TextField } from "formik-material-ui";
import { Button, LinearProgress } from "@material-ui/core";
import { Field, Formik } from "formik";
import { Form } from "../atoms";

const AddNewProductForm = () => {
  return (
    <Formik
      initialValues={{
        productName: "",
        category: "",
        price: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.productName) {
          errors.productName = "Wpisz nazwę Produktu";
        } else if (values.category < 5) {
          errors.category =
            "Nazwa kategorii nie może być krótsza niż 10 znaków";
        } else if (values.price <= 0) {
          errors.price = "Nie prawidłowa cena";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
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
        </Form>
      )}
    </Formik>
  );
};

export default AddNewProductForm;
