import { styled } from "@mui/material";
export const LoginButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  color: theme.palette.text.secondary,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
