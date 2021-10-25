import { useRef } from "react";
import { useFormikContext } from "formik";

export const useInputsData = () => {
  const { values, handleSubmit, setFieldValue } = useFormikContext();
  const inputEl = useRef(null);
  const triggerClick = () => {
    inputEl.current.click();
  };

  const fieldsData = [
    {
      name: "tags",
      type: "text",
      label: "Tags",
      shrinkValue: values.tags,
    },
    {
      name: "stock",
      type: "number",
      label: "Ilość",
      shrinkValue: values.stock,
    },
    {
      name: "price",
      type: "number",
      label: "Cena",
      shrinkValue: values.price,
    },
    {
      name: "sale",
      type: "number",
      label: "Cena promocyjna",
      shrinkValue: values.sale,
    },
  ];

  return {
    fieldsData,
    triggerClick,
    handleSubmit,
    setFieldValue,
    inputEl,
    values,
  };
};

export const categories = [
  "Odzież męska",
  "Odzież damska",
  "Biżuteria",
  "Elektronika",
];
