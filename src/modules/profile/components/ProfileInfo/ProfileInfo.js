import React from 'react';
import { Container, Typography, Box, Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { ProfileBox, Header, EditProfileBtn, ShoppingInfo, StyledCard, StyledAvatar } from './ProfileInfo.style';

const ProfileInfo = () => {
    return (
        <Container>
            <ProfileBox>
                <Box><Header><PersonIcon color='primary' /><Typography variant='h2'>Mój Profil</Typography></Header>
                </Box>
                <EditProfileBtn>Edytuj Profil</EditProfileBtn>
            </ProfileBox>
            <ShoppingInfo>
                <Grid container spacing={5}>
                    <Grid item xs={5}><StyledCard>
                        <StyledAvatar alt="Remy Sharp" src="" >P</StyledAvatar>

                    </StyledCard></Grid>

                </Grid>
            </ShoppingInfo>
        </Container>
    )
}

export default ProfileInfo;