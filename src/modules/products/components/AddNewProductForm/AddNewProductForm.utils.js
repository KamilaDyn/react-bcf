import * as Yup from "yup";

export const useAddNewProduct = () => {
  const initialValues = {
    productName: "",
    category: "",
    price: "",
  };
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 500);
  };

  const SubmitForm = Yup.object().shape({
    productName: Yup.string()
      .min(6, "Nazwa produktu nie może być krótsza niż 6 znaków")
      .required("Wpisz nazwę produktu"),
    category: Yup.string()
      .min(6, "Nazwa kategorii nie może być krótsza niż 3 znaki")
      .required("Wpisz kategorię"),
    price: Yup.number().min(0.01).required("Dodaj cenę"),
  });

  return { initialValues, onSubmit, SubmitForm };
};
