import { styled } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const Heading = styled(Typography)(({ secondary }) => ({
  fontWeight: "bold",
  color: "#2f4f4f",
  textTransform: "uppercase",
  lineHeight: "42px",
  textAlign: "center",
  ...(secondary && {
    padding: "20px 0",
    fontSize: "24px",
    lineHeight: "34px",
  }),
}));

export default Heading;
