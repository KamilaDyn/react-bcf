import { Card, styled } from "@mui/material";

export const StyledCard = styled(Card)(({ theme, head }) => ({
  margin: theme.spacing(5, 0),
  padding: theme.spacing(4),
  boxShadow: "none",
  ...(head && {
    backgroundColor: "transparent",
  }),
}));
