import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledBox = styled(Box)(({ isLoaded, isChild }) => ({
  backgroundColor: "white",
  opacity: 0.85,
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  ...(isLoaded && {
    display: "none",
  }),
  ...(isChild && {
    width: "100%",
  }),
}));
