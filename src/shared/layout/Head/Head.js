import React from "react";
import { Typography } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import logo from "../../../assets/logo.png";

import {
  StyledHead,
  StyledBox,
  StyledBadge,
  StyledIconButton,
} from "./Head.style";

const Head = ({ setOpen, open, countItems, shoppingList }) => {
  return (
    <StyledHead>
      <StyledBox>
        <img src={logo} alt="logo" />
        <Typography variant="h1">Bazarek</Typography>
      </StyledBox>
      <StyledBox>
        <StyledIconButton edge="end">
          <PersonOutlineIcon />
        </StyledIconButton>
        <StyledIconButton
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
        >
          <StyledBadge
            color="primary"
            badgeContent={shoppingList.length > 0 ? countItems() : "0"}
          >
            <LocalMallOutlinedIcon />
          </StyledBadge>
        </StyledIconButton>
      </StyledBox>
    </StyledHead>
  );
};

export default Head;
