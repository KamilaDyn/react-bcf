import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { useAuthState } from "../../../../loginProvider";
import { routes } from "../../../../config/routes";
import { ActionsInfo } from "../ActionsInfo";
import { PersonalData } from "../PersonalData";
import { ProfileBox, Header, EditProfileBtn } from "./ProfileInfo.style";

const ProfileInfo = () => {
  const { stateContext } = useAuthState();
  let history = useHistory();
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
      <ActionsInfo />
      <PersonalData />
      <Box>
        <Box display='flex' justifyContent='end' alignItems='center' mt={5}>
          <EditProfileBtn
            onClick={() => {
              stateContext.setLoggedIn(false);
              history.push(routes.home);
            }}
          >
            Wyloguj
          </EditProfileBtn>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileInfo;
