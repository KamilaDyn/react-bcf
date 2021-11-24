import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Tooltip, Typography, Box } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { actions, selectors } from "store";
import { routes } from "config/routes";
import { logo } from "assets";
import { useAmountOfProduct } from "../../utils";
import { SearchProduct } from "../../components";
import { StyledGrid, StyledBadge, StyledIconButton } from "./Head.style";

const Head = () => {
  const user = useSelector(selectors.auth.getEmail);
  const logged = useSelector(selectors.auth.getIsLoggedIn);
  const countItemsInBasket = useAmountOfProduct();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <StyledGrid
      container
      spacing={3}
      justifyContent='center'
      direction='column'
    >
      <Grid
        xs={12}
        sm={3}
        container
        item
        alignItems='center'
        justifyContent='center'
      >
        <Box
          onClick={() => {
            history.push(routes.home);
          }}
        >
          <img src={logo} alt='logo' />
        </Box>
        <Typography variant='h1'>Bazarek</Typography>
      </Grid>
      <Grid
        xs={12}
        sm={5}
        container
        item
        alignItems='center'
        justifyContent='center'
      >
        <SearchProduct />
      </Grid>
      <Grid
        xs={12}
        sm={3}
        container
        item
        alignItems='center'
        justifyContent='center'
      >
        <StyledIconButton
          edge='end'
          onClick={() =>
            logged
              ? history.push(routes.profile)
              : dispatch(actions.login.openLoginForm())
          }
        >
          <Tooltip
            title={logged && user ? user.split("@")[0] : "Profil"}
            placement='top'
          >
            <PersonOutlineIcon color='secondary' />
          </Tooltip>
        </StyledIconButton>
        <StyledIconButton
          aria-label='open drawer'
          onClick={() => dispatch(actions.shoppingList.toggleShoppingCard())}
        >
          <StyledBadge color='primary' badgeContent={countItemsInBasket()}>
            <LocalMallOutlinedIcon color='secondary' />
          </StyledBadge>
        </StyledIconButton>
        {logged && (
          <StyledIconButton
            edge='end'
            onClick={() => history.push(routes.addNewProduct)}
          >
            <Tooltip title='Dodaj produkty' placement='top'>
              <AddCircleOutlineOutlinedIcon color='secondary' />
            </Tooltip>
          </StyledIconButton>
        )}
      </Grid>
    </StyledGrid>
  );
};

export default Head;
