import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const Heading = styled(Typography)(({ theme, secondary }) => ({
  fontWeight: "bold",
  color: theme.palette.secondary.main,
  textTransform: "uppercase",
  textAlign: "center",
  ...(secondary && {
    padding: "20px 0",
    fontSize: theme.typography.fontSize.s,
  }),
}));

export default Heading;
