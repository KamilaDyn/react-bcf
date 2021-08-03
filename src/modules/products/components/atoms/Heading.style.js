import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { theme } from "../../../../theme";

const Heading = styled(Typography)(({ secondary }) => ({
  fontWeight: "bold",
  color: theme.colors.col2,
  textTransform: "uppercase",
  textAlign: "center",
  ...(secondary && {
    padding: "20px 0",
    fontSize: theme.fontSize.s,
  }),
}));

export default Heading;
