import { styled } from "@mui/material";

export const StyledInput = styled("input")(({ theme }) => ({
  lineHeight: 1.65,
  maxWidth: 50,
  display: "block",
  margin: theme.spacing(0),
  padding: theme.spacing(0, 3),
  outline: "none",
  border: "none",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: theme.typography.h4.fontSize,
  [theme.breakpoints.up("md")]: {
    width: 50,
    height: 50,
  },
  "&[type=number]": {
    "-moz-appearance": "textfield",
  },
  "&::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
  },
  "&::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
  },
}));
