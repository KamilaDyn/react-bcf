import React, { useState } from "react";
import {
  CardHeader,
  CardContent,
  Collapse,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { StyledIconButton } from "../atoms";
import { AddProductForm } from "../AddProductForm";

import {
  StyledCard,
  StyledCardActions,
  StyledContainer,
  StyledMedia,
  StyledTypography,
} from "./ProductsList.style";

const ProductsList = ({ products }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledContainer>
      {products.map((p, index) => (
        <StyledCard key={index}>
          <CardHeader title={p.title} subheader={p.category} />
          <StyledMedia image={p.image} title={p.title} alt={p.title} />
          <StyledCardActions>
            <StyledTypography color="secondary">{p.price}$</StyledTypography>
            <StyledIconButton
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              expandOpen={expanded}
            >
              <ExpandMoreIcon />
            </StyledIconButton>
          </StyledCardActions>

          <AddProductForm index={index} id={p.id} />

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="body2" color="textSecondary" paragraph>
                {p.description}
              </Typography>
            </CardContent>
          </Collapse>
        </StyledCard>
      ))}
    </StyledContainer>
  );
};

export default ProductsList;
