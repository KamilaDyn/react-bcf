import { Badge, Box, Grid, IconButton, styled } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  lineHeight: "3.75rem",
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
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme, basket }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  marginRight: theme.spacing(4),
  padding: theme.spacing(3)
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
}));
