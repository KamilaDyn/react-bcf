import { styled } from "@mui/material";
import { Form } from "formik";

const StyledForm = styled(Form)(({ theme }) => ({
  padding: theme.spacing(6, 15, 4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export default StyledForm;
