import { useState } from 'react';
import { useFormikContext } from 'formik';

interface ValuesTypes {
  showCardNumber: boolean;
  showBlik: boolean;
}
interface FieldsItem {
  id: number;
  name: string;
  label: string;
  type: string;
}

export const usePaymentForm = () => {
  const [chosenPayment, setChoosenPayment] = useState('debitCard');
  const { values } = useFormikContext<ValuesTypes>();

  const handleChange = (_, value: string) => {
    setChoosenPayment(value);
  };

  if (chosenPayment === 'debitCard') {
    values.showCardNumber = true;
  } else {
    values.showCardNumber = false;
  }
  if (chosenPayment === 'blik') {
    values.showBlik = true;
  } else {
    values.showBlik = false;
  }

  return {
    handleChange,
    chosenPayment,
  };
};

export const fields: FieldsItem[] = [
  {
    id: 1,
    name: 'cardNumber',
    label: 'Numer Karty',
    type: 'text',
  },
  {
    id: 2,
    name: 'expiringDate',
    label: 'Ważność karty',
    type: 'text',
  },
  {
    id: 3,
    name: 'nameHolder',
    label: 'Imię posiadacza',
    type: 'text',
  },
  {
    id: 4,
    name: 'lastNameHolder',
    label: 'Nazwisko posiadacza',
    type: 'text',
  },
];
