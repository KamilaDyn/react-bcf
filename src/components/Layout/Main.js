import React from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";

const StyledMain = styled.main`
  width: 60%;
  border-right: 1px solid #444;
  padding: 15px 20px;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};
export default Main;
