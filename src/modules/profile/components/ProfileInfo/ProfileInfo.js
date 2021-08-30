import React from "react";
import { Container, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { ActionsInfo } from "../ActionsInfo";
import { PersonalData } from "../PersonalData";
import {
    ProfileBox,
    Header,
    EditProfileBtn,
  } from "./ProfileInfo.style";

const ProfileInfo = () => {
  return (
    <Container>
      <ProfileBox>
        <Box>
          <Header>
            <PersonIcon color='primary' />
            <Typography variant='h2'>Mój Profil</Typography>
          </Header>
        </Box>
        <EditProfileBtn>Edytuj Profil</EditProfileBtn>
      </ProfileBox>
      <ActionsInfo/>
      <PersonalData/>

    </Container>
  );
};

export default ProfileInfo;
