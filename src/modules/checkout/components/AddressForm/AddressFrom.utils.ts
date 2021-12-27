import * as Yup from 'yup';
export const addressFormDetails = [
  { id: 1, name: 'firstName', label: 'Imię', type: 'text' },
  { id: 2, name: 'secondName', label: 'Nazwisko', type: 'text' },
  { id: 3, name: 'email', label: 'Adress email', type: 'email' },
  { id: 4, name: 'phone', label: 'Numer telefonu', type: 'phone' },
  { id: 5, name: 'street', label: 'Nazwa ulicy', type: 'text' },
  { id: 6, name: 'postCode', label: 'Kod pocztowy', type: 'text' },
  { id: 7, name: 'city', label: 'Miasto', type: 'text' },
  { id: 8, name: 'country', label: 'Kraj', type: 'text' },
];

export const billingFormDetails = [
  { id: 1, name: 'billingFirstName', label: 'Imię', type: 'text' },
  { id: 2, name: 'billingSecondName', label: 'Nazwisko', type: 'text' },
  { id: 3, name: 'billingEmail', label: 'Adress email', type: 'email' },
  { id: 4, name: 'billingPhone', label: 'Numer telefonu', type: 'phone' },
  { id: 5, name: 'billingStreet', label: 'Nazwa ulicy', type: 'text' },
  { id: 6, name: 'billingPostCode', label: 'Kod pocztowy', type: 'text' },
  { id: 7, name: 'billingCity', label: 'Miasto', type: 'text' },
  { id: 8, name: 'billingCountry', label: 'Kraj', type: 'text' },
];

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
