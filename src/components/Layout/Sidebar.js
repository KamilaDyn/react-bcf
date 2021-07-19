import React from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";

const Wrapper = styled.div`
  width: 40%;
  padding: 15px 20px;
`;

const Sidebar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Sidebar;
