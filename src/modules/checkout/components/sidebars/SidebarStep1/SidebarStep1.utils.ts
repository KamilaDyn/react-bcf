import { useState } from 'react';

export const useSidebar = () => {
  const [deliveryValue, setDeliveryValue] = useState('pickUpFromShop');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeliveryValue((event.target as HTMLInputElement).value);
  };

  return {
    handleChange,
    deliveryValue,
  };
};
