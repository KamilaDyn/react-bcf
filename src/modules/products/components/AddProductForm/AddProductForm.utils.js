import { useState, useContext } from "react";
import { ProductContext } from "../../../context";

export const useAddProduct = () => {
  const [price, setPrice] = useState(0);

  const productContext = useContext(ProductContext);
  const handleSubmit = (e, id, quantity) => {
    let product = productContext.products.find((item) => {
      return item.id === id;
    });
    setPrice(product.price);
    const productItem = {
      id: id,
      name: product.title,
      count: quantity,
      itemPrice: product.price,
      price: product.price * quantity,
    };

    const itemId = productContext.shoppingList.find((item) => item.id === id);

    if (!itemId) {
      productContext.dispatch({ type: "ADD", productItem });
    } else {
      const currentItems = [...productContext.shoppingList];
      const findItem = currentItems.find((item) => item.id === id);
      findItem.count = findItem.count + quantity;
      findItem.price = findItem.price + price * quantity;
      productContext.dispatch({ type: "INCREMENT" });
    }
    e.preventDefault();
  };

  return {
    handleSubmit,
  };
};
