import React from "react";
import { CircularProgress } from "@mui/material";
import { StyledBox } from "./Loader.style";

const Loader = ({ loading }) => {
  return (
    <StyledBox isLoaded={loading}>
      <StyledBox isChild>
        <CircularProgress
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </StyledBox>
    </StyledBox>
  );
};

export default Loader;
