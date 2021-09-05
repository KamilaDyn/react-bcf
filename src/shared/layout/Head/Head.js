import React  from "react";
import { useHistory } from "react-router-dom";
import { Grid, Tooltip, Typography, Link } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { routes } from "../../../config/routes";
import { logo } from "../../../assets";

import { StyledGrid, StyledBadge, StyledIconButton } from "./Head.style";

const Head = ({
  setOpen,
  open,
  countItems,
  shoppingList,
  setOpenDialog,
  openDialog,
  openProductForm,
  setOpenProductForm,
  isLoggedIn,
  user,
}) => {
  let history = useHistory();
  return (
    <StyledGrid
      container
      spacing={5}
      justifyContent="center"
      direction="column"
    >
      <Grid
        xs={12}
        sm={6}
        container
        item
        alignItems="center"
        justifyContent="center"
      >
        <Link href={routes.home}>
        <img src={logo} alt="logo" />
        </Link>
        <Typography variant="h1">Bazarek</Typography>
      </Grid>
      <Grid
        xs={12}
        sm={6}
        container
        item
        alignItems="center"
        justifyContent="center"
      >
        
        <StyledIconButton edge="end" onClick={() => isLoggedIn && history.location.pathname ==='/profile' ?    setOpenDialog(true):history.push(routes.profile) }>
          <Tooltip
            title={isLoggedIn ? user.split("@")[0] : "Profil"}
            placement="top"
          >
            <PersonOutlineIcon />
          </Tooltip>
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
        {isLoggedIn && (
          <StyledIconButton
            edge="end"
            onClick={() => setOpenProductForm(!openProductForm)}
          >
            <Tooltip title="Dodaj produkty" placement="top">
              <AddCircleOutlineOutlinedIcon />
            </Tooltip>
          </StyledIconButton>
        )}
      </Grid>
    </StyledGrid>
  );
};

export default Head;
