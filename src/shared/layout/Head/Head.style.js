import { Badge, Box, IconButton, styled } from "@material-ui/core";

export const StyledHead = styled("div")(({ theme }) => ({
  width: "70%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: theme.palette.primary.contrastText,
  lineHeight: "60px",
  padding: theme.spacing(5, 0),
  margin: theme.spacing(5, "auto"),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
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
