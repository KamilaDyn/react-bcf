import React from "react";
import {
  AccordionSummary,
  AccordionDetails,
  CardHeader,
  Typography,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { StyledIconButton } from "../atoms";
import { AddProductForm } from "../AddProductForm";
import { useProductList } from "./ProductsList.utils";

import {
  StyledAccordion,
  StyledCard,
  StyledContainer,
  StyledMedia,
  StyledTypography,
} from "./ProductsList.style";

const ProductsList = ({ products }) => {
  const { expanded, setExpanded, handleChange } = useProductList();
  return (
    <StyledContainer>
      {products.map((p, index) => (
        <StyledCard key={index}>
          <CardHeader title={p.title} subheader={p.category} />
          <StyledMedia image={p.image} title={p.title} alt={p.title} />

          <StyledTypography>{p.price}$</StyledTypography>
          <AddProductForm index={index} id={p.id} />

          <StyledIconButton
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            expandedOpen={expanded}
          ></StyledIconButton>

          <StyledAccordion
            square
            expanded={expanded === p.id}
            onChange={handleChange(p.id)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              expandIcon={
                <StyledIconButton isAccordion="true">
                  <ExpandLessIcon />
                </StyledIconButton>
              }
            >
              <Typography variant="subtitle2">Szczegóły</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph variant="subtitle2">
                {p.description}
              </Typography>
            </AccordionDetails>
          </StyledAccordion>
        </StyledCard>
      ))}
    </StyledContainer>
  );
};

export default ProductsList;
