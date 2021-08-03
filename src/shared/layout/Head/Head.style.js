import { styled, Typography } from "@material-ui/core";
import { theme } from "../../../theme";

export const StyledHead = styled("div")({
  width: "100vw",
  height: "80px",
  backgroundColor: theme.colors.col4,
  lineHeight: "60px",
  padding: "20px 0",
  position: "relative",
});

export const StyledHeading = styled(Typography)({
  fontWeight: "bold",
  color: theme.colors.col1,
  textTransform: "uppercase",
  lineHeight: "42px",
  fontSize: theme.fontSize.m,
  textAlign: "center",
});
