import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions } from "../../../store";

export const useLoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      const { email, password } = values;
      dispatch(actions.auth.loginUser(email, password, history));
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
