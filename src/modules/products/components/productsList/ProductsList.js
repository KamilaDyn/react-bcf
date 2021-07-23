import React, { useState } from "react";
import { AddProductForm } from "../index";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Collapse,
  CardActions,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from "./ProductList.style";

const ProductsList = ({ products }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  return (
    <Container className={classes.container}>
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
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <AddProductForm index={index} id={p.id} />

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2" color="textSecondary" paragraph>
                {p.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Container>
  );
};

export default ProductsList;
