import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import { selectors, actions } from 'store';
import { Values } from '../../shared';

export const useSidebar = () => {
  const [deliveryValue, setDeliveryValue] = useState('pickUpFromShop');
  const finalPrice = useSelector(selectors.shoppingList.finalPrice);
  const isVoucherUsed = useSelector(selectors.shoppingList.isVoucherUsed);
  const [prevValue, setPrevValue] = useState('pickUpFromShop');
  const { reducePriceWihVoucher, raisePriceByDeliveryPrice } =
    actions.shoppingList;
  const { values, errors } = useFormikContext<Values>();
  const dispatch = useDispatch();

 
  const handleChange = (_, value: string) => {
    setDeliveryValue(value);
  }

  const applyVoucher = () => {
    if (values.voucher && !errors.voucher) {
      const reduceByVoucher = finalPrice - 150;
      dispatch(reducePriceWihVoucher(reduceByVoucher));
      return finalPrice;
    }
  };

  const raisePriceByDelivery = () => {
    setPrevValue(deliveryValue);
    switch (deliveryValue) {
      case 'pickUpFromShop':
        switch (prevValue) {
          case 'dpd':
            dispatch(
              raisePriceByDeliveryPrice(finalPrice - 15, 'pickUpFromShop')
            );
            return finalPrice;
          case 'ups':
            dispatch(
              raisePriceByDeliveryPrice(finalPrice - 20, 'pickUpFromShop')
            );
            return finalPrice;
          default:
            return finalPrice;
        }
      case 'dpd':
        switch (prevValue) {
          case 'pickUpFromShop':
            dispatch(raisePriceByDeliveryPrice(finalPrice + 15, 'dpd'));
            return finalPrice;
          case 'ups':
            dispatch(raisePriceByDeliveryPrice(finalPrice - 5, 'dpd'));
            return finalPrice;
          default:
            return finalPrice;
        }
      case 'ups':
        switch (prevValue) {
          case 'pickUpFromShop':
            dispatch(raisePriceByDeliveryPrice(finalPrice + 20, 'ups'));
            return finalPrice;
          case 'dpd':
            dispatch(raisePriceByDeliveryPrice(finalPrice + 5, 'ups'));
            return finalPrice;
          default:
            return finalPrice;
        }
      default:
        return finalPrice;
    }
  };

  return {
    raisePriceByDelivery,
    applyVoucher,
    isVoucherUsed,
    finalPrice,
    values,
    handleChange,
    deliveryValue
  }}