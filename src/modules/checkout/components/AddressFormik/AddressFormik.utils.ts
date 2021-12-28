import * as Yup from 'yup';
import { MyFormValues } from '../../utils';

export const initialValues: MyFormValues = {
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

export const SignupSchema = Yup.object().shape({
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
  billingEmail: Yup.string()
    .email('Adres musi zawierać @')
    .required('Wymagany adress email'),
  billingFirstName: Yup.string()
    .min(2, 'Imię jest za krótkie')
    .required('Wpisz imię'),
  billingSecondName: Yup.string()
    .min(3, 'Nazwisko za krótkie')
    .required('Wpisz nazwisko'),
  billingStreet: Yup.string()
    .min(3, 'Ulica jest za krótka')
    .required('Wpisz nazwę ulicy'),
  billingCity: Yup.string()
    .min(3, 'Nazwa miasta jest za krótka')
    .required('Wpisz nazwę miasta'),
  billingCountry: Yup.string()
    .min(3, 'Nazwa kraju jest za krótka ')
    .required('Wpisz nazwę kraju'),
  billingPostCode: Yup.string()
    .min(3, 'Nieprawidłowy kod pocztowy')
    .required('Wpisz kod pocztowy'),
});
