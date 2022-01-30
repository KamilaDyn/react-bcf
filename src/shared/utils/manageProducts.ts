import { useSelector, useDispatch } from 'react-redux';
import { selectors, actions } from 'store';
import { useCalculatePrice } from 'shared';

export const useManageProducts = () => {
  const shoppingList = useSelector(selectors.shoppingList.getShoppingList);
  const products = useSelector(selectors.products.getProducts);
  const { calculatePrice } = useCalculatePrice();
  const dispatch = useDispatch();
  const {
    incrementProductInList,
    decrementProductInList,
    deleteProductFromList,
  } = actions.shoppingList;

  const handleDelete = (id) => {
    return new Promise((resolve, reject) => {
      dispatch(deleteProductFromList(id));
      return resolve(shoppingList.filter((data) => data.id !== id));
    }).then((response) => {
      calculatePrice(response);
    });
  };
  const increment = (product) => {
    return new Promise((resolve, reject) => {
      const currentProduct = [...shoppingList];
      const prodPrice = products.find((item) => {
        return item.id === product.id;
      });
      const findProduct = currentProduct.find((item) => item.id === product.id);
      findProduct.count = findProduct.count + 1;
      findProduct.price = findProduct.price + prodPrice.price;

      if (currentProduct) {
        dispatch(incrementProductInList(currentProduct));
        return resolve(shoppingList);
      } else {
        return reject('nie możemy dodać produktu');
      }
    })
      .then((resolve) => {
        calculatePrice(resolve);
      })
      .catch((error) => console.error(error));
  };
  const decrement = (product) => {
    return new Promise((resolve, reject) => {
      const currentProduct = [...shoppingList];
      const prodPrice = products.find((item) => {
        return item.id === product.id;
      });
      const findProduct = currentProduct.find((item) => item.id === product.id);
      findProduct.count = findProduct.count - 1;
      findProduct.price = findProduct.price - prodPrice.price;
      dispatch(decrementProductInList(currentProduct));
      return resolve(shoppingList);
    }).then((response) => {
      calculatePrice(response);
    });
  };
  return {
    handleDelete,
    shoppingList,
    increment,
    decrement,
  };
};
