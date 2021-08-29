import { Avatar, Box, Button, Card, styled } from '@material-ui/core';

export const ProfileBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(6),

}))

export const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
})

export const EditProfileBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 600,
    backgroundColor: 'rgb(252, 233, 236)',
    width: 'fit-content',
    fontSize: '1rem',
    border: 'none',

}))

export const ShoppingInfo = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
}))

export const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.secondary.main,
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px',
    overflow: 'hidden',
    borderRadius: 8,
    display: 'flex',
    padding: theme.spacing(3, 6),
    height: '100%',
    alignItems: 'center',

}))

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 64,
    height: 64,
}))