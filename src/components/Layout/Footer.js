import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>My products</p>
    </StyledFooter>
  );
};

export default Footer;
