import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, selectors } from 'store';

export const useAddProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectors.products.getProducts);
  const shoppingList = useSelector(selectors.shoppingList.getShoppingList);
  const { finalShoppingPrice, addNewProductToList, incrementProductInList } =
    actions.shoppingList;

  const calculatePrice = (products) => {
    if (products && products.length) {
      const item = products
        .filter((item) => item.price > 0)
        .map((i) => i.price)
        .reduce((a, b) => a + b, 0)
        .toFixed(2);
      dispatch(finalShoppingPrice(item));
    }
  };

  const handleSubmit = (e, id, quantity) => {
    e.preventDefault();
    const product = products.find((item) => {
      return item.id === id;
    });
    const productItem = {
      id: id,
      name: product.title,
      count: quantity,
      itemPrice: product.price,
      price: product.price * quantity,
      img: product.image,
    };
    const productInList = shoppingList.find((item) => item.id === Number(id));
    return new Promise((resolve, reject) => {
      if (!productInList) {
        dispatch(addNewProductToList(productItem));
        return resolve([...shoppingList, productItem]);
      } else {
        const currentProduct = [...shoppingList];
        const findProduct = currentProduct.find((item) => item.id === id);
        findProduct.count = findProduct.count + quantity;
        findProduct.price =
          findProduct.price + findProduct.itemPrice * quantity;

        dispatch(incrementProductInList(findProduct));
        return resolve(shoppingList);
      }
    }).then((response) => {
      calculatePrice(response);
    });
  };

  return {
    handleSubmit,
  };
};

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  return {
    increment,
    decrement,
    setQuantity,
    quantity,
  };
};
