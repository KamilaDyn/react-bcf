import { Card, Link, Typography, styled } from '@mui/material'


export const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px',
    overflow: 'hidden',
    borderRadius: 8,
    paddingRight: 0,
    paddingBottom: theme.typography.h3.fontSize,
    color: theme.palette.secondary.main,
    padding: theme.spacing(6),
}))
export const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.textSecondary,
    padding: '26px 30px 1rem',
    fontSize: '0.8rem',

}))
export const Wrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
})
export const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: '0.9rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingBottom: theme.spacing(5),



}))