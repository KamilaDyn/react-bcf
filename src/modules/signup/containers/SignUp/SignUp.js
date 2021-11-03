import React from "react";
import { SignupForm, Header } from "../../components";
import { StyledContainer } from "./SignUp.style";

const SignUp = () => {
  return (
    <StyledContainer maxWidth='sm'>
      <Header />
      <SignupForm />
    </StyledContainer>
  );
};

export default SignUp;
