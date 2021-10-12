import * as Yup from "yup";
import { URL } from "../../../../../shared";

export const categories = [
  "Odzież męska",
  "Odzież damska",
  "Biżuteria",
  "Elektronika",
];

export const fieldsData = [
  {
    name: "tags",
    type: "text",
    label: "Tags",
  },
  {
    name: "stock",
    type: "number",
    label: "Ilość",
  },
  {
    name: "price",
    type: "number",
    label: "Cena",
  },
  {
    name: "sale",
    type: "number",
    label: "Cena promocyjna",
  },
];

export const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Nazwa produktu jest za krótka")
    .required("Wymagana nazwa"),
  description: Yup.string()
    .min(15, "Opis jest za krótki")
    .required("Wprowadź opis produktu. Minimum 15 znaków"),
  stock: Yup.number().min(1, "Minimum 1").required("Wprowadź ilość produktów"),
  price: Yup.number()
    .min(0.01, "Minimum 1")
    .required("Wprowadź cenę produktu"),
  sale: Yup.number().min(0.01, "Minimum 1"),
  image: Yup.string()
    .matches(URL, "wprowadź porpwany link url")
    .required("Wpisz link do obrazka"),
});
