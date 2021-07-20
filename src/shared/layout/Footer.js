import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledFooter = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #2e2e2e;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2" color="textSecondary" paragraph>
        Sklep dla każdego
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
