import { styled, Input } from "@material-ui/core";

export const Wrapper = styled("div")({
  display: "flex",
  wrap: "no-wrap",
});

export const StyledInput = styled(Input)(({ custom }) => ({
  ...(custom && {
    lineHeight: 1.65,
    display: "block",
    margin: 0,
    border: "1px solid #eee",
    height: 40,
    width: "80px",
    padding: "0 12px",
    verticalAlign: "top",
    textAlign: "center",
    outline: "none",
  }),
}));
