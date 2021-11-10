import { Box, Button, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme, addImg }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  padding: theme.spacing(5),
  borderRadius: 8,
  ...(addImg && {
    padding: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  opacity: 0.8,
  width: 200,
  height: 40,
  backgroundColor: theme.palette.primary.light,
  color: "rgba(0, 0, 0, 0.87)",
  fontWeight: "500",
  padding: theme.spacing(1.5, 3.5),
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  margin: theme.spacing(3, "auto", 5, "auto"),
}));

export const Divider = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  height: 1,
  width: 50,
  margin: theme.spacing(0, 3),
}));
