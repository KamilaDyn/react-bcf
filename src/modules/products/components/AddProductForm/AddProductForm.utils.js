import { useState } from "react";

export const useAddProduct = () => {
  const [price, setPrice] = useState(0);

  const handleSubmit = (e, id, quantity, products, shoppingList, dispatch) => {
    e.preventDefault();

    let product = products.find((item) => {
      return item.id === id;
    });
    setPrice(product.price);
    const productItem = {
      id: id,
      name: product.title,
      count: quantity,
      price: product.price * quantity,
    };
    const itemId = shoppingList.find((item) => item.id === id);
    if (!itemId) {
      dispatch({ type: "ADD", productItem });
    } else {
      const currentItems = [...shoppingList];
      const findItem = currentItems.find((item) => item.id === id);
      findItem.count = findItem.count + quantity;
      findItem.price = findItem.price + price * quantity;
      dispatch({ type: "INCREMENT" });
    }
  };

  return {
    handleSubmit,
  };
};
