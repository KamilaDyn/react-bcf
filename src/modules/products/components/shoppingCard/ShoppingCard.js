import React from "react";
import { Sidebar } from "../../../../shared";
import { Heading } from "../../components";

import { makeStyles } from "@material-ui/core/styles";
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
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "inline-block",
  },
  noitems: {
    textAlign: "center",
    padding: "20px 0",
  },
}));

const ShoppingCard = ({ shoppingList, deleteProduct }) => {
  const classes = useStyles();
  const handleDelete = (id) => {
    deleteProduct({ id, type: "REMOVE" });
  };
  return (
    <Sidebar>
      <Heading>Twoje produkty</Heading>
      {shoppingList.length > 0 ? (
        <List className={classes.root}>
          {shoppingList.map((item) => (
            <ListItem key={item.id} id={item.id}>
              <ListItemText
                primary={item.name}
                secondary={item.price + "$"}
              ></ListItemText>
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
  );
};

export default ShoppingCard;
