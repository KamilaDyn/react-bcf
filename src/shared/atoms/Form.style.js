import { styled } from "@material-ui/core";
const Form = styled("form")(({ theme }) => ({
  padding: theme.spacing(6, 15, 4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export default Form;
