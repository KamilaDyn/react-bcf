import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions } from "store";
export const useSignUpForm = () => {
  const history = useHistory();

  const initialValues = {
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    repeatPassword: "",
    phone: "",
  };

  const dispatch = useDispatch();
  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      const { firstName, secondName, email, password, phone } = values;
      const payload = { firstName, secondName, email, password, phone };
      dispatch(actions.auth.singupUser(payload, history));
    }, 500);
  };

  return {
    initialValues,
    onSubmit,
  };
};

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(3, "Imię jest za krókie").required("Wpisz imię"),
  secondName: Yup.string()
    .min(3, "Nazwisko jest za krótkie")
    .required("Wpisz nazwisko"),
  email: Yup.string().email("Adres musi zawierać @").required("Wymagane hasło"),
  password: Yup.string()
    .min(6, "Hasło jest za krótkie")
    .required("Wpisz hasło"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Hasła muszą się zgadzać")
    .required("Powtórz hasło"),
  phone: Yup.string().min(8, "to short").max(10, "to long"),
});
export const signupFields = [
  {
    id: 1,
    name: "firstName",
    label: "Imię",
    type: "text",
  },
  {
    id: 2,
    name: "secondName",
    label: "Nazwisko",
    type: "text",
  },
  {
    id: 3,
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    id: 4,
    name: "password",
    label: "hasło",
    type: "password",
  },
  {
    id: 5,
    name: "repeatPassword",
    label: "Powtórz hasło",
    type: "password",
  },
  {
    id: 6,
    name: "phone",
    label: "Numer telefonu",
    type: "text",
  },
];
