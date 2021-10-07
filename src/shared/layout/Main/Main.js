import React from "react";
import { StyledContainer } from "./Main.style";

const Main = ({ children, openShoppingCard }) => {
  return (
    <StyledContainer isCardOpen={openShoppingCard}>{children}</StyledContainer>
  );
};
export default Main;
