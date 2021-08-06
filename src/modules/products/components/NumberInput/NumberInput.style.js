import { Button, styled } from "@material-ui/core";

export const StyledButton = styled(Button)(({ theme, inCard }) => ({
  ...(inCard && {
    padding: theme.spacing(4, 2),
    borderRadius: "50%",
  }),
}));

export const StyledInput = styled("input")(({ theme }) => ({
  lineHeight: 1.65,
  display: "block",
  margin: 0,
  padding: "0 12px",
  outline: "none",
  border: "none",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: theme.typography.fontSize.xs,
  [theme.breakpoints.up("md")]: {
    width: 50,
    height: 50,
  },
  "&[type=number]": {
    "-moz-appearance": "textfield",
  },
  "&::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "&::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
}));
