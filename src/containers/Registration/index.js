import React from "react";
import Grid from "@mui/material/Grid";

import SignUpSection from "./components/SignUpSection";
const Registration = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ p: 1 }} sm={6}>
          <SignUpSection
            orientation="left"
            title="Become a Local"
            subtext="sign up to become a guide"
          />
        </Grid>

        <Grid item xs={12} sx={{ p: 1 }} sm={6}>
          <SignUpSection
            orientation="right"
            title="Sign In"
            justifyContent="flex-start"
            subtext="sign in to your account"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Registration;
