import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "store";

export const useAddProduct = () => {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const products = useSelector(selectors.products.getProducts);
  const shoppingList = useSelector(selectors.shoppingList.getShoppingList);
  const handleSubmit = (e, id, quantity) => {
    e.preventDefault();
    const product = products.find((item) => {
      return item.id === id;
    });
    setPrice(product.price);
    const productItem = {
      id: id,
      name: product.title,
      count: quantity,
      itemPrice: product.price,
      price: product.price * quantity,
      img: product.image,
    };
    const productInList = shoppingList.find((item) => item.id === Number(id));

    if (!productInList) {
      dispatch(actions.shoppingList.addNewProductToList(productItem));
    } else {
      const currentProduct = [...shoppingList];
      const findProduct = currentProduct.find((item) => item.id === id);
      findProduct.count = findProduct.count + quantity;
      findProduct.price = findProduct.price + price * quantity;
      dispatch(actions.shoppingList.incrementProductInList(currentProduct));
    }
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
