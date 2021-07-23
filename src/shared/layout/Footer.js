import React from "react";
import { Container, Typography } from "@material-ui/core";

export const useStyles = {
  root: {
    display: "flex",
  },
  container: {
    width: "100%",
    height: 50,
    textAlign: "center",
    backgroundColor: "#2e2e2e",
  },
};

const Footer = () => {
  return (
    <Container>
      <Typography variant="body2" color="textSecondary" paragraph>
        Sklep dla każdego
      </Typography>
    </Container>
  );
};

export default Footer;
