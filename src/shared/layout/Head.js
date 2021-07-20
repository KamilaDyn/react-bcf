import React from "react";
import styled from "styled-components";

const StyledHead = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #c0c0c0;
  line-height: 60px;
  padding: 20px 0;
`;

const StyledHeading = styled.h1`
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  line-height: 42px;
  text-align: center;
`;

const Head = ({ children }) => {
  return (
    <StyledHead>
      <StyledHeading>{children}</StyledHeading>
    </StyledHead>
  );
};

export default Head;
