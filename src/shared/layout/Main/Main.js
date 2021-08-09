import React from "react";
import { StyledContainer } from "./Main.style";

const Main = ({ children, open }) => {
  console.log(open);
  return <StyledContainer isCardOpen={open}>{children}</StyledContainer>;
};
export default Main;
