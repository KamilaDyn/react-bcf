import { Box, styled } from "@material-ui/core";

export const Form = styled("form")(({ theme }) => ({
  padding: theme.spacing(6, 15, 4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const FieldsBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const Image = styled("img")(({ theme }) => ({
  width: "1.2rem",
  height: "1.2rem",
  marginRight: theme.spacing(2),
}));
