import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const Heading = styled(Typography)(({ theme, secondary }) => ({
  fontWeight: "bold",
  color: theme.palette.secondary.main,
  textTransform: "uppercase",
  textAlign: "center",
  ...(secondary && {
    padding: theme.spacing(5, 0),
    fontSize: theme.typography.h2.fontSize,
  }),
}));

export default Heading;
