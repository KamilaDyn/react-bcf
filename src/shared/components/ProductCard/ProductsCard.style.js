import { styled } from "@mui/material/styles";
import { CardMedia, Typography } from "@mui/material";

export const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
  backgroundPosition: "center",
  backgroundSize: "contain",
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  color: theme.palette.primary.main,
  textAlign: "center",
  margin: theme.spacing(4),
}));
