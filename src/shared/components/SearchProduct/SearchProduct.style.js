import { OutlinedInput, Paper, styled } from "@mui/material";
export const StyledSearchInput = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  borderRadius: theme.spacing(4),
  height: 50,
  cursor: "text",
}));

export const StyledPaper = styled(Paper)({
  position: "absolute",
  zIndex: 99,
});
