import React from "react";
import { Formik } from "formik";
import { StyledBox } from "./ProductForm.style";
import { InputsComponent } from "../InputsComponent";
import { SignupSchema } from "./ProductForm.util";
import { useSelector } from "react-redux";
import { selectors } from "../../../../../store";

const ProductForm = ({ onSubmit }) => {
  const product = useSelector(selectors.products.getProduct);
  return (
    <StyledBox>
      <Formik
        initialValues={product}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <InputsComponent />
      </Formik>
    </StyledBox>
  );
};

export default ProductForm;
