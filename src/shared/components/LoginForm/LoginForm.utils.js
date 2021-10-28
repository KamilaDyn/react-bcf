import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser, closeLoginForm } from "../../../loginProvider/actions";

export const useLoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      let email = values.email;
      let password = values.password;
      let payload = { email, password };
      dispatch(loginUser(payload));
      dispatch(closeLoginForm());
    }, 500);
  };

  const SignupSchema = Yup.object().shape({
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
    SignupSchema,
  };
};
