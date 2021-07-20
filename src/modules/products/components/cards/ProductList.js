import React, { useState } from "react";

import styled from "styled-components";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";

import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { Tooltip } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
    maxWidth: 345,
    margin: "15px 20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    backgroundPosition: "center",
    backgroundSize: "contain",
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
  },
  price: {
    fontSize: "42px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const ProductList = ({ click, products }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Wrapper>
      {products.map((p, index) => (
        <Card key={index} className={classes.root}>
          <CardHeader title={p.title} subheader={p.category} />
          <CardMedia
            image={p.image}
            title={p.title}
            className={classes.media}
            alt={p.title}
          />
          <CardActions className={classes.actions}>
            <Typography color="secondary" className={classes.price}>
              {p.price}$
            </Typography>
            <IconButton
              aria-label="share"
              onClick={() => click(p.id)}
              className={classes.button}
            >
              <Tooltip title="Buy" placement="top">
                <ShoppingCartIcon color="primary" style={{ fontSize: 40 }} />
              </Tooltip>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2" color="textSecondary" paragraph>
                {p.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Wrapper>
  );
};

export default ProductList;
