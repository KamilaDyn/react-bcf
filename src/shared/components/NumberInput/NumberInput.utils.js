import { useState } from "react";

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