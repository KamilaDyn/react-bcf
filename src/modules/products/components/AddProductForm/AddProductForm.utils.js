import { useState, useContext } from "react";
import { useQuantity } from "../numberInput/NumberInput.utils";
import { ProductContext } from "../index";

export const useAddProduct = () => {
  const { quantity } = useQuantity();

  const [price, setPrice] = useState(0);

  const productContext = useContext(ProductContext);
  const handleSubmit = (e, id) => {
    let product = productContext.products.find((item) => {
      return item.id === id;
    });
    setPrice(product.price);
    const productItem = {
      id: id,
      name: product.title,
      count: quantity,
      price: product.price * quantity,
    };

    console.log(productItem);

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
