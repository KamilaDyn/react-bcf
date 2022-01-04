import { styled } from "@mui/material";

export const StyledButton = styled("button")(
  ({ theme, submitForm, google, facebook, register }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.h4.fontSize,
    color: theme.palette.primary.contrastText,
    cursor: "pointer",
    border: "none",
    width: 250,
    margin: theme.spacing(4, "auto"),
    transition: "0.3",
    borderRadius: 4,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    ...(register && {
      width: '100%'
    }),
    ...(submitForm && {
      width: "100%",
      margin: 0,
    }),
    ...(google && {
      width: "100%",
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
      },
    }),
    ...(facebook && {
      width: "100%",
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.palette.info.main,
      "&:hover": {
        backgroundColor: theme.palette.info.light,
      },
    }),
  })
);

export default StyledButton;