import { useState } from "react";

export const useProductList = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return {
    handleChange,
    expanded,
    setExpanded,
  };
};
