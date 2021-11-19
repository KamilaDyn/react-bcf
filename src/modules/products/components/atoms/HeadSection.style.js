import { Box, styled } from "@mui/material";
const HeadSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  marginBottom: theme.spacing(3),
}));
export default HeadSection;
