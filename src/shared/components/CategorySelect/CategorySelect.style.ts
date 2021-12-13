import { Box, Button, styled, Typography } from '@mui/material';

type StyledBoxProps = {
  category: boolean;
};
export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.contrastText,
  width: 250,
  height: 45,
  display: 'inline-flex',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'left',
  paddingLeft: theme.spacing(1),
}));

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme, category }) => ({
  width: 250,
  backgroundColor: theme.palette.primary.contrastText,
  boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
  borderRadius: 4,
  position: 'absolute',
  top: 50,
  left: 0,
  zIndex: 90,
  ...(category && {
    display: 'block',
  }),
}));
