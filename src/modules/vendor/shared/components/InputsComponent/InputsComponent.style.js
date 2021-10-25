import { Box, Button, styled } from "@material-ui/core";

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
  backgroundColor: theme.palette.primary.light,
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
