import React from "react";
import { Divider } from "@material-ui/core";
import {
  Badge,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Sidebar } from "../../../../shared";
import {
  Heading,
  useShoppingCardData,
  StyledIconButton,
  StyledList,
  StyledDrawer,
} from "../index";

const ShoppingCard = () => {
  const { handleDelete, shoppingList, open, handleDrawer } =
    useShoppingCardData();

  return (
    <StyledDrawer variant="persistent" anchor="right" open={open} custom="true">
      <StyledIconButton onClick={() => handleDrawer(false)}>
        <ChevronRightIcon />
      </StyledIconButton>

      <Divider />
      <Sidebar>
        <Heading secondary="true">Twoje produkty</Heading>
        {shoppingList.length > 0 ? (
          <StyledList custom="true">
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
          </StyledList>
        ) : (
          <Typography paragraph>
            Nie wybrałeś jeszcze żadnego produktu
          </Typography>
        )}
      </Sidebar>
    </StyledDrawer>
  );
};

export default ShoppingCard;
