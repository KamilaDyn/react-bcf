import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import {
  StyledCard,
  StyledLink,
  Wrapper,
  StyledTypography,
} from "./Dashboard.style";

const Dashboard = () => {
  return (
    <StyledCard>
      <StyledTypography color='textSecondary'>PANEL KLIENTA</StyledTypography>
      <StyledLink href='#'>
        <Wrapper>
          <LocalMallIcon />
          <span>Zamówienia</span>
        </Wrapper>
        <span>5</span>
      </StyledLink>
      <StyledLink href='#'>
        <Wrapper>
          <FavoriteBorderIcon />
          <span>Ulubione</span>
        </Wrapper>
        <span>19</span>
      </StyledLink>
      <StyledLink href='#'>
        <Wrapper>
          <HeadsetOutlinedIcon />
          <span>Wsparcie</span>
        </Wrapper>
        <span>1</span>
      </StyledLink>
      <StyledTypography color='textSecondary'>
        USTAWIENIA KONTA
      </StyledTypography>
      <StyledLink href='#'>
        <Wrapper>
          <PersonOutlineOutlinedIcon />
          <span>Informacje</span>
        </Wrapper>
        <span>3</span>
      </StyledLink>
      <StyledLink href='#'>
        <Wrapper>
          <RoomOutlinedIcon />
          <span>Adresy</span>
        </Wrapper>
        <span>2</span>
      </StyledLink>
      <StyledLink href='#'>
        <Wrapper>
          <CreditCardOutlinedIcon />
          <span>Metody płatności</span>
        </Wrapper>
        <span>1</span>
      </StyledLink>
    </StyledCard>
  );
};

export default Dashboard;
