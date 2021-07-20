import React from "react";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 70%;
  padding: 15px 20px;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};
export default Main;
