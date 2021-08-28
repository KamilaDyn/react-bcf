import * as Yup from "yup";
import { loginUser, useAuthState, useAuthDispatch } from "../../../../loginProvider";

export const useLoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const { dispatchContext } = useAuthDispatch();
  const { stateContext } = useAuthState();
  const onSubmit = (values, { setSubmitting }) => {
    stateContext.setOpenDialog(false);

    setTimeout(() => {
      setSubmitting(false);
      let email = values.email;
      let password = values.password;
      let payload = { email, password };
      stateContext.setLoggedIn(true);
      loginUser(dispatchContext, payload);
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
