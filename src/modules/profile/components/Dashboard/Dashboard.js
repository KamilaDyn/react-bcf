import React from 'react';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import { StyledCard, StyledLink, Wrapper, StyledTypography } from './Dashboard.style';


const Dashboard = () => {
    return (
        <StyledCard>
            <StyledTypography color='textSecondary' >PANEL KLIENTA</StyledTypography>
            <StyledLink href="#" >
                <Wrapper><LocalMallIcon /><span>Zamówienia</span></Wrapper>
                <span>5</span>
            </StyledLink>
            <StyledLink href="#" >
                <Wrapper><FavoriteBorderIcon /><span>Ulubione</span></Wrapper>
                <span>19</span>
            </StyledLink>
            <StyledLink href="#" >
                <Wrapper><HeadsetOutlinedIcon /><span>Wsparcie</span></Wrapper>
                <span>1</span>
            </StyledLink>
            <StyledTypography color='textSecondary' >USTAWIENIA KONTA</StyledTypography>
            <StyledLink href="#" >
                <Wrapper><PersonOutlineOutlinedIcon /><span>Informacje</span></Wrapper>
                <span>3</span>
            </StyledLink>
            <StyledLink href="#" >
                <Wrapper><RoomOutlinedIcon /><span>Adresy</span></Wrapper>
                <span>2</span>
            </StyledLink>
            <StyledLink href="#" >
                <Wrapper><CreditCardOutlinedIcon /><span>Metody płatności</span></Wrapper>
                <span>1</span>
            </StyledLink>
        </StyledCard>
    )
}

export default Dashboard;