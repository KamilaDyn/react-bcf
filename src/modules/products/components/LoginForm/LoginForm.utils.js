import * as Yup from "yup";
import { useAuth } from "../../../../provider";

export const useLoginForm = () => {
  const { login } = useAuth();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      login(values.email);
    }, 500);
  };
  const SubmitSchema = Yup.object().shape({
    email: Yup.string()
      .email("Adres musi zawierać @")
      .required("Wymagane hasło"),
    password: Yup.string()
      .min(6, "Hasło jest za krótkie")
      .required("Wpisz hasło"),
  });

  return {
    initialValues,
    onSubmit,
    SubmitSchema,
  };
};
