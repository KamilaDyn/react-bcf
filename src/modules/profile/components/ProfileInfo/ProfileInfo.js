import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { routes } from "config/routes";
import { ActionsInfo } from "../ActionsInfo";
import { PersonalData } from "../PersonalData";
import { ProfileBox, Header, StyledBtn } from "./ProfileInfo.style";
import { useHandleLoginOut } from "./ProfileInfor.utils";

const ProfileInfo = () => {
  const { handleLoginOut } = useHandleLoginOut();

  const history = useHistory();
  return (
    <Container>
      <ProfileBox>
        <Box>
          <Header>
            <PersonIcon color='primary' />
            <Typography variant='h2'>Mój Profil</Typography>
          </Header>
        </Box>
        <StyledBtn>Edytuj Profil</StyledBtn>
      </ProfileBox>
      <ActionsInfo />
      <PersonalData />
      <Box>
        <Box display='flex' justifyContent='end' alignItems='center' mt={5}>
          <StyledBtn
            onClick={() => {
              handleLoginOut();
              history.push(routes.home);
            }}
          >
            Wyloguj
          </StyledBtn>
        </Box>
      </Box>
    </Container>
  );
};

export default ProfileInfo;
