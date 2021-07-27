import React from "react";
import { Drawer, Divider } from "@material-ui/core";
import { Sidebar } from "../../../../shared";
import { Heading } from "../../components";
import { useStyles } from "./ShoppingCard.style";
import { useShoppingCardData } from "./ShoppingCard.utils";

import {
  Badge,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const ShoppingCard = () => {
  const { handleDelete, shoppingList, open, handleDrawer } =
    useShoppingCardData();

  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => handleDrawer(false)}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <Sidebar>
        <Heading>Twoje produkty</Heading>
        {shoppingList.length > 0 ? (
          <List className={classes.root}>
            {shoppingList.map((item) => (
              <ListItem key={item.id} id={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={item.price + "$"}
                />
                <ListItemIcon>
                  <Badge badgeContent={item.count} color="secondary">
                    <ShoppingBasketOutlinedIcon color="primary" />
                  </Badge>
                </ListItemIcon>
                <IconButton onClick={() => handleDelete(item.id)}>
                  <DeleteIcon color="primary" />
                </IconButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography paragraph className={classes.noitems}>
            Nie wybrałeś jeszcze żadnego produktu
          </Typography>
        )}
      </Sidebar>
    </Drawer>
  );
};

export default ShoppingCard;
