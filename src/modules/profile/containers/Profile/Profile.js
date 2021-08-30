import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Dashboard } from "../../components/Dashboard";
import { ProfileInfo } from "../../components/ProfileInfo";

const Profile = () => {
  return (
    <Container>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6} lg={3}>
          <Dashboard />
        </Grid>
        <Grid item xs={12} sm={6} lg={9}><ProfileInfo /></Grid>
      </Grid>
    </Container>
  )
};

export default Profile;
