import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'store';
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
const today = new Date();

const thirdStep = Yup.object().shape({
  showCardNumber: Yup.boolean(),
  showBlik: Yup.boolean(),
  cardNumber: Yup.string().when('showCardNumber', {
    is: true,
    then: Yup.string()
      .min(10, 'Numer karty za krótki')
      .required('Wpisz numer karty'),
  }),
  expiringDate: Yup.date().when('showCardNumber', {
    is: true,
    then: Yup.date()
      .min(today, 'Karta musi być ważna')
      .required('wpisz datę ważności karty'),
  }),
  nameHolder: Yup.string().when('showCardNumber', {
    is: true,
    then: Yup.string()
      .min(3, 'Imię jest za krótkie')
      .required('Wpisz imię właściciela karty'),
  }),
  lastNameHolder: Yup.string().when('showCardNumber', {
    is: true,
    then: Yup.string()
      .min(3, 'Nazwisko jest za krótkie')
      .required('Wpisz nazwisko właściciela karty'),
  }),
  blik: Yup.string().when('showBlik', {
    is: true,
    then: Yup.string()
      .min(6, 'Numer karty za krótki')
      .required('Wpisz numer karty'),
  }),
});

export const SignupSchema = [firstStep, secondStep, thirdStep];

export const useCheckoutFormik = (activeStep, setActiveStep) => {
  const isLastStep = activeStep === Object.keys(steps).length - 1;
  const currentValidationSchema = SignupSchema[activeStep];
  const userProducts = useSelector(selectors.shoppingList.getShoppingList);
  const finalPrice = useSelector(selectors.shoppingList.finalPrice);
  const deliveryType = useSelector(selectors.shoppingList.deliveryType);
  const dispatch = useDispatch();
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const submitForm = async (values, action) => {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    action.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = (values, action) => {
    const initialState = {
      shoppingList: [],
      finalPrice: 0,
      cardOpen: false,
      isVoucherUsed: false,
      deliveryType: 'pickUpFromShop',
    };
    if (isLastStep) {
      if (values.checkbox) {
        const {
          firstName,
          secondName,
          email,
          phone,
          street,
          postCode,
          city,
          country,
        } = values;
        submitForm(
          {
            ...values,
            sumPrice: finalPrice,
            deliveryType: deliveryType,
            billingFirstName: firstName,
            billingSecondName: secondName,
            billingEmail: email,
            billingPhone: phone,
            billingStreet: street,
            billingPostCode: postCode,
            billingCity: city,
            billingCountry: country,
          },
          action
        );
      } else {
        submitForm(
          { ...values, sumPrice: finalPrice, deliveryType: deliveryType },
          action
        );
      }
      dispatch(actions.shoppingList.cleanBasket(initialState));
      return userProducts;
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };
  const initialValues: PersonalDataFormValues = {
    userProducts: userProducts,
    customerNote: '',
    deliveryType: deliveryType,
    voucher: '',
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
    sumPrice: 0,
    cardNumber: '',
    showCardNumber: true,
    expiringDate: '',
    nameHolder: '',
    lastNameHolder: '',
    showBlik: false,
    blik: '',
  };

  return {
    handleSubmit,
    isLastStep,
    currentValidationSchema,
    initialValues,
  };
};
