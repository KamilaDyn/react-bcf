import React from "react";

import { StyledHead, StyledHeading } from "./Head.style";

const Head = ({ children }) => {
  return (
    <StyledHead>
      <StyledHeading>{children}</StyledHeading>
    </StyledHead>
  );
};

export default Head;
