import { useFormikContext } from 'formik';

interface MyValue {
  values: object;
  checkbox: boolean;
  firstName: string;
  billingFirstName: string;
  secondName: string;
  billingSecondName: string;
  email: string;
  billingEmail: string;
  phone: string;
  billingPhone: string;
  street: string;
  billingStreet: string;
  postCode: string;
  billingPostCode: string;
  city: string;
  billingCity: string;
  country: string;
  billingCountry: string;
}

interface BillingItem {
  id: number;
  name: string;
  label: string;
  type: string;
  value?: string;
}

export const useAddressForm = () => {
  const { values, handleSubmit } = useFormikContext<MyValue>();
  const billingFormDetails: BillingItem[] = [
    {
      id: 1,
      name: 'billingFirstName',
      label: 'Imię',
      type: 'text',
      value: values.checkbox ? values.firstName : values.billingFirstName,
    },
    {
      id: 2,
      name: 'billingSecondName',
      label: 'Nazwisko',
      type: 'text',
      value: values.checkbox ? values.secondName : values.billingSecondName,
    },
    {
      id: 3,
      name: 'billingEmail',
      label: 'Adress email',
      type: 'email',
      value: values.checkbox ? values.email : values.billingEmail,
    },
    {
      id: 4,
      name: 'billingPhone',
      label: 'Numer telefonu',
      type: 'phone',
      value: values.checkbox ? values.phone : values.billingPhone,
    },
    {
      id: 5,
      name: 'billingStreet',
      label: 'Nazwa ulicy',
      type: 'text',
      value: values.checkbox ? values.street : values.billingStreet,
    },
    {
      id: 6,
      name: 'billingPostCode',
      label: 'Kod pocztowy',
      type: 'text',
      value: values.checkbox ? values.postCode : values.billingPostCode,
    },
    {
      id: 7,
      name: 'billingCity',
      label: 'Miasto',
      type: 'text',
      value: values.checkbox ? values.city : values.billingCity,
    },
    {
      id: 8,
      name: 'billingCountry',
      label: 'Kraj',
      type: 'text',
      value: values.checkbox ? values.country : values.billingCountry,
    },
  ];

  return {
    billingFormDetails,
    handleSubmit,
  };
};

export const addressFormDetails: BillingItem[] = [
  { id: 1, name: 'firstName', label: 'Imię', type: 'text' },
  { id: 2, name: 'secondName', label: 'Nazwisko', type: 'text' },
  { id: 3, name: 'email', label: 'Adress email', type: 'email' },
  { id: 4, name: 'phone', label: 'Numer telefonu', type: 'phone' },
  { id: 5, name: 'street', label: 'Nazwa ulicy', type: 'text' },
  { id: 6, name: 'postCode', label: 'Kod pocztowy', type: 'text' },
  { id: 7, name: 'city', label: 'Miasto', type: 'text' },
  { id: 8, name: 'country', label: 'Kraj', type: 'text' },
];
