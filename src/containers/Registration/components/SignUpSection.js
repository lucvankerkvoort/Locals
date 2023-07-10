import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const SignUpSection = ({ title, subtext, justifyContent, orientation }) => {
  const classes = useStyles();

  const orientationStyle = {
    title: orientation === "left" ? "left" : "right",
    subtext: orientation === "left" ? "right" : "left",
  };

  return (
    <>
      <Typography align={orientationStyle.title} sx={classes.titleText}>
        {title}
      </Typography>
      <Grid item xs={12} sx={classes.subtextContainer}>
        <Typography align={orientationStyle.subtext} sx={classes.subtext}>
          {subtext}
        </Typography>
      </Grid>
    </>
  );
};

const useStyles = () => ({
  titleText: {
    py: 2,
    fontSize: "h3.fontSize",
    fontFamily: "Pacifico",
    px: 5,
  },
  subtextContainer: {
    display: "flex",
    flexDirection: "column",
    height: 800,
    backgroundColor: "lightgrey",
    cursor: "pointer",
  },
  subtext: {
    py: 2,
    fontSize: "h5.fontSize",
    fontFamily: "Pacifico",
    px: 5,
  },
});
export default SignUpSection;
