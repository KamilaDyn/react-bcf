import { styled, Typography } from "@material-ui/core";

export const StyledHead = styled("div")({
  width: "100vw",
  height: "80px",
  backgroundColor: "#c0c0c0",
  lineHeight: "60px",
  padding: "20px 0",
});

export const StyledHeading = styled(Typography)({
  fontWeight: "bold",
  color: "#333",
  textTransform: "uppercase",
  lineHeight: "42px",
  textAlign: "center",
});
