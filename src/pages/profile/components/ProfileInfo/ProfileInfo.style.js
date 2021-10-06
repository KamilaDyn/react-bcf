import {Box, Button, styled } from '@material-ui/core';

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


