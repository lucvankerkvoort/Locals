import React from "react";
import { Title, Hero } from "./components/layout";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const Landing = () => (
  <>
    <Card
      sx={{
        position: "absolute",
        width: 500,
        height: 700,
        top: 100,
        left: 250,
        boxShadow: 10,
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "50%",
          flexDirection: "column",
          p: 5,
          boxSizing: "border-box",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ py: 2, fontSize: "h5.fontSize", fontFamily: "Pacifico" }}
        >
          Sign In
        </Typography>
        <TextField label="Username" />

        <TextField label="Password" />
        <Typography>
          <a href="#">Forgot Password?</a>
        </Typography>
        <Button>Login</Button>
      </Box>
      <Box
        sx={{
          height: "50%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 5,
        }}
      >
        <Typography sx={{ fontSize: "h5.fontSize", fontFamily: "Pacifico" }}>
          Don't have an account?
        </Typography>
        <Button sx={{ width: "100%" }} variant="contained">
          Register
        </Button>
      </Box>
    </Card>
    <Grid container rowSpacing={12}>
      <Grid item xs={12} sx={gridstyles}>
        <Title title="Locals" />
      </Grid>

      <Grid item xs={12} sx={gridstyles}>
        <Hero
          title="Tour your Destination"
          subtext="Get a local guide to show you their favorite spots"
          bgImage="test1.jpg"
          orientation="right"
        />
      </Grid>

      <Grid item xs={12} sx={gridstyles}>
        <Hero
          title="Become a Local Guide"
          subtext="connect with travellers in your home town"
          bgImage="test2.jpg"
          orientation="left"
        />
      </Grid>
    </Grid>
  </>
);

const gridstyles = {
  height: `100vh`,
  display: `flex`,
  justifyContent: `center`,
  flexDirection: `column`,
};

export default Landing;
