import React from "react";
import { CircularProgress, Box } from "@material-ui/core";
import { StyledBox } from "./Loader.style";

const Loader = ({ loading }) => {
  return (
    <StyledBox sx={{ display: "flex" }} isloaded={loading}>
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
