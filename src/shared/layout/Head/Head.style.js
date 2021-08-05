import { styled, Typography } from "@material-ui/core";

export const StyledHead = styled("div")(({ theme }) => ({
  width: "100vw",
  height: "80px",
  backgroundColor: theme.palette.primary.light,
  lineHeight: "60px",
  padding: "20px 0",
  position: "relative",
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.main,
  textTransform: "uppercase",
  lineHeight: "42px",
  fontSize: theme.typography.fontSize.xs,
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize.s,
  },
}));
