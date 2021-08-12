import React from "react";
import { Grid, Tooltip, Typography } from "@material-ui/core";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { useAuth } from "../../../AuthProvider";
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
}) => {
  const { isLoggedIn } = useAuth();
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
        <img src={logo} alt="logo" />
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
        <StyledIconButton edge="end" onClick={() => setOpenDialog(!openDialog)}>
          <Tooltip title="Title" placement="top">
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
