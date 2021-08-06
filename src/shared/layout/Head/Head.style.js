import { Badge, IconButton, styled, Typography } from "@material-ui/core";

export const StyledHead = styled("div")(({ theme }) => ({
  width: "70%",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary.contrastText,
  lineHeight: "60px",
  padding: theme.spacing(5, 0),
  margin: theme.spacing(5, "auto"),
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.secondary.main,
  textTransform: "uppercase",
  lineHeight: "42px",
  fontSize: theme.typography.fontSize.xs,
  padding: theme.spacing(4, 0),
  [theme.breakpoints.up("md")]: {
    fontSize: theme.typography.fontSize.s,
  },
}));
export const IconContainer = styled("div")(({ theme }) => ({}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  marginRight: theme.spacing(4),
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  fontSize: theme.typography.fontSize.xxs,
}));
