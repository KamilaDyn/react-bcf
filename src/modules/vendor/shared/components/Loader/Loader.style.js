import { Box, styled } from "@material-ui/core";

export const StyledBox = styled(Box)(({ isloaded, isChild }) => ({
  backgroundColor: "white",
  opacity: 0.85,
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  ...(isloaded && {
    display: "none",
  }),
  ...(isChild && {
    width: "100%",
  }),
}));
