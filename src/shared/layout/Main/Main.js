import React from "react";
import { StyledContainer } from "./Main.style";

const Main = ({ children, open }) => {
  return <StyledContainer isCardOpen={open}>{children}</StyledContainer>;
};
export default Main;
