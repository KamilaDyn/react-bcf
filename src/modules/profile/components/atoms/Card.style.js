import { Card, styled } from "@mui/material";

export const StyledCard = styled(Card)(({ theme, userInfo }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.secondary.main,
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px',
    overflow: 'hidden',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: theme.spacing(4, 8),
    height: '100%',
    alignItems: 'center',
    ...(userInfo && {
flexDirection:'row',
    })

}))