import { useState } from "react";

export const useProductList = () => {
  const [expanded, setExpanded] = useState("");
  const [expandedCard, setExpandedCard] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return {
    handleChange,
    expanded,
    setExpanded,
  };
};
