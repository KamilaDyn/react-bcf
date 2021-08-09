import { Badge, Box, Grid, IconButton, styled } from "@material-ui/core";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  flexDirection: "column",
  lineHeight: "60px",
  padding: theme.spacing(5, 0),
  margin: theme.spacing(5, "auto"),
  [theme.breakpoints.up("xs")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(4),
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  marginRight: theme.spacing(4),
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  fontSize: theme.typography.fontSize.xxs,
}));
