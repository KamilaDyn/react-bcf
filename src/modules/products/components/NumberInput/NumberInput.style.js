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

export const StyledButton = styled("button")({
  backgroundColor: theme.colors.col4,
  color: theme.colors.col1,
  width: 50,
  height: 50,
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  fontSize: theme.fontSize.s,
  "&:hover": {
    backgroundColor: theme.colors.col1,
    color: theme.colors.colf,
  },
});
