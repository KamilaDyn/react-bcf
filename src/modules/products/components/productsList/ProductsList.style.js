import { styled } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";

export const StyledIconButton = styled(IconButton)(({ theme, expandopen }) => ({
  transform: "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  ...(expandopen && { transform: "rotate(180deg)" }),
}));

export const StyledContainer = styled(Container)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
});

export const StyledCard = styled(Card)({
  width: 280,
  maxWidth: 345,
  margin: "15px 20px",
  flexDirection: "column",
});

export const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%", // 16:9
  backgroundPosition: "center",
  backgroundSize: "contain",
});

export const StyledCardActions = styled(CardActions)({
  display: "flex",
  justifyContent: "space-around",
});

export const StyledTypography = styled(Typography)({
  fontSize: "42px",
});
