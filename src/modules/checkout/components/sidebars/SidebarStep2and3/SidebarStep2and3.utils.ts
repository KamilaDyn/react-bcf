import { useSelector } from 'react-redux';
import { selectors } from 'store';

export const useSidebarStep2and3 = () => {
  const products = useSelector(selectors.shoppingList.getShoppingList);
  const finalPrice = useSelector(selectors.shoppingList.finalPrice);
  const deliveryType = useSelector(selectors.shoppingList.deliveryType);
  const isVoucherUsed = useSelector(selectors.shoppingList.isVoucherUsed);

  const shoppingProductsPrice = products
    .filter((item) => item.price > 0)
    .map((i) => i.price)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  const deliveryPrice = () => {
    switch (deliveryType) {
      case 'ups':
        return 20.0;
      case 'dpd':
        return 15.0;
      case 'pickUpFromShop':
        return 0.0;
      default:
        return 0.0;
    }
  };

  return { shoppingProductsPrice, finalPrice, deliveryPrice, isVoucherUsed };
};
