import * as Yup from 'yup';
import { PersonalDataFormValues, steps } from '../shared';

const firstStep = Yup.object().shape({
  voucher: Yup.string().min(6, 'za krótki text'),
});
const secondStep = Yup.object().shape({
  checkbox: Yup.boolean(),
  email: Yup.string()
    .email('Adres musi zawierać @')
    .required('Wymagany adress email'),
  firstName: Yup.string().min(2, 'Imię jest za krótkie').required('Wpisz imię'),
  secondName: Yup.string()
    .min(3, 'Nazwisko za krótkie')
    .required('Wpisz nazwisko'),
  street: Yup.string()
    .min(3, 'Ulica jest za krótka')
    .required('Wpisz nazwę ulicy'),
  city: Yup.string()
    .min(3, 'Nazwa miasta jest za krótka')
    .required('Wpisz nazwę miasta'),
  country: Yup.string()
    .min(3, 'Nazwa kraju jest za krótka ')
    .required('Wpisz nazwę kraju'),
  postCode: Yup.string()
    .min(3, 'Nieprawidłowy kod pocztowy')
    .required('Wpisz kod pocztowy'),
  billingEmail: Yup.string().when('checkbox', {
    is: false,
    then: Yup.string()
      .email('Adres musi zawierać @')
      .required('Wymagany adress email'),
  }),
  billingFirstName: Yup.string().when('checkbox', {
    is: false,
    then: Yup.string().min(2, 'Imię jest za krótkie').required('Wpisz imię'),
  }),
  billingSecondName: Yup.string().when('checkbox', {
    is: false,
    then: Yup.string().min(3, 'Nazwisko za krótkie').required('Wpisz nazwisko'),
  }),
  billingStreet: Yup.string().when('checkbox', {
    is: false,
    then: Yup.string()
      .min(3, 'Ulica jest za krótka')
      .required('Wpisz nazwę ulicy'),
  }),
  billingCity: Yup.string().when('checkbox', {
    is: false,
    then: Yup.string()
      .min(3, 'Nazwa miasta jest za krótka')
      .required('Wpisz nazwę miasta'),
  }),
  billingCountry: Yup.string().when('checkbox', {
    is: false,
    then: Yup.string()
      .min(3, 'Nazwa kraju jest za krótka ')
      .required('Wpisz nazwę kraju'),
  }),
  billingPostCode: Yup.string().when('checkbox', {
    is: false,
    then: Yup.string()
      .min(3, 'Nieprawidłowy kod pocztowy')
      .required('Wpisz kod pocztowy'),
  }),
});
const thirdStep = Yup.object().shape({
  card: Yup.string().min(3, 'Nazwisko za krótkie').required('wpisz voucher'),
});

export const SignupSchema = [firstStep, secondStep, thirdStep];

export const useCheckoutFormik = (activeStep, setActiveStep) => {
  const isLastStep = activeStep === Object.keys(steps).length - 1;
  const currentValidationSchema = SignupSchema[activeStep];
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const submitForm = async (values, actions) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return {
    handleSubmit,
    isLastStep,
    currentValidationSchema,
  };
};

export const initialValues: PersonalDataFormValues = {
  firstName: '',
  secondName: '',
  email: '',
  phone: '',
  street: '',
  postCode: '',
  city: '',
  country: '',
  billingFirstName: '',
  billingSecondName: '',
  billingEmail: '',
  billingPhone: '',
  billingStreet: '',
  billingPostCode: '',
  billingCity: '',
  billingCountry: '',
  checkbox: false,
};
