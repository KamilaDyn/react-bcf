import React from "react";
import styled from "styled-components";
import Heading from "../atoms/Heading";

const Wrapper = styled.div`
  width: 30%;
  padding: 15px 20px;
  position: fixed;
  top: 100px;
  right: 0;
`;

const Sidebar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Sidebar;
