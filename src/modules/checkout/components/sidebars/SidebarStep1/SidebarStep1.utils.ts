import { useState } from 'react';

export const useSidebar = () => {
  const [deliveryValue, setDeliveryValue] = useState('pickUpFromShop');

  const handleChange = (_, value: string) => {
    setDeliveryValue(value);
  }

  return {
    handleChange,
    deliveryValue,
  };
};
