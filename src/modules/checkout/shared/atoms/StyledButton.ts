import { Button, styled } from '@mui/material';

type buttonBack = {
  transparent?: boolean;
};
export const StyledButton = styled(Button)<buttonBack>(
  ({ theme, transparent }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '100%',
    margin: theme.spacing(6, 0),
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
    },
    ...(transparent && {
      backgroundColor: 'transparent',
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
    }),
  })
);
