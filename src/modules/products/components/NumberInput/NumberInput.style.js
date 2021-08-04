import { styled } from "@material-ui/core";
import { theme } from "../../../../theme";

export const Wrapper = styled("div")({
  display: "flex",
  wrap: "no-wrap",
  justifyContent: "center",
  padding: 12,
});

export const StyledInput = styled("input")({
  lineHeight: 1.65,
  display: "block",
  margin: 0,
  height: 50,
  width: 60,
  padding: "0 12px",
  outline: "none",
  textAlign: "center",
});
