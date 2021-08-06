import React from "react";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

import {
  IconContainer,
  StyledHead,
  StyledHeading,
  StyledBadge,
  StyledIconButton,
} from "./Head.style";

const Head = ({ setOpen, open, countItems, shoppingList }) => {
  return (
    <StyledHead>
      <StyledHeading>Sklep dla Ciebie</StyledHeading>
      <IconContainer>
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
      </IconContainer>
    </StyledHead>
  );
};

export default Head;
