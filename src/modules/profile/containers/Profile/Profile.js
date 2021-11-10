import React from "react";
import { Container, Grid } from "@mui/material";
import { Dashboard } from "../../components/Dashboard";
import { ProfileInfo } from "../../components/ProfileInfo";

const Profile = () => {
  return (
    <Container>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={4} md ={3} >
          <Dashboard />
        </Grid>
        <Grid item xs={12} sm={8} md={9} ><ProfileInfo /></Grid>
      </Grid>
    </Container>
  )
};

export default Profile;
