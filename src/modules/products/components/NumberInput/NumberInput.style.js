import { styled } from "@material-ui/core";

export const Wrapper = styled("div")({
  display: "flex",
  wrap: "no-wrap",
  justifyContent: "center",
  padding: 12,
});

export const StyledInput = styled("input")(({ theme }) => ({
  lineHeight: 1.65,
  display: "block",
  margin: 0,
  height: 40,
  width: 60,
  padding: "0 12px",
  outline: "none",
  textAlign: "center",
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
