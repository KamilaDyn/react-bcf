export interface PersonalDataFormValues {
  customerNote: string;
  voucher: string;
  checkbox: false;
  deliveryType: string;
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  street: string;
  postCode: string;
  city: string;
  country: string;
  billingFirstName: string;
  billingSecondName: string;
  billingEmail: string;
  billingPhone: string;
  billingStreet: string;
  billingPostCode: string;
  billingCity: string;
  billingCountry: string;
  userProducts: object[];
  sumPrice: number;
  cardNumber: string;
  showCardNumber: boolean;
  expiringDate: string;
  nameHolder: string;
  lastNameHolder: string;
  showBlik: boolean;
  blik: string;
}

export interface Values {
  errors: object;
  values: object;
  voucher: string;
  deliveryType: string;
}

export interface PropsTypes {
  activeStep: number;
}
