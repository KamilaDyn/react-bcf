import React from "react";
import { Formik } from "formik";
import { StyledBox } from "./ProductForm.style";
import { InputsComponent } from "../InputsComponent";
import { SignupSchema } from "./ProductForm.util";

const ProductForm = ({ onSubmit, initialProductValues, setFieldValue }) => {
  return (
    <StyledBox>
      <Formik
        initialValues={initialProductValues}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <InputsComponent setFieldValue={setFieldValue} />
      </Formik>
    </StyledBox>
  );
};

export default ProductForm;
