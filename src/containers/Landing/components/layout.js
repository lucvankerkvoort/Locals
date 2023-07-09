import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Hero = ({ title, subtext, bgImage, orientation }) => (
  <>
    <Box sx={orientation === "left" ? titleLeft : titleRight}>
      <Typography sx={textGray}>{title}</Typography>
    </Box>
    <Card sx={{ ...cardstyles, backgroundImage: `url(${bgImage})` }}>
      <Box sx={wrapper}>
        <Typography
          sx={
            orientation === "left"
              ? { ...textRight, ...text }
              : { ...textLeft, ...text }
          }
        >
          {subtext}
        </Typography>
      </Box>
    </Card>
  </>
);

export const Title = ({ title }) => (
  <Card sx={{ ...cardstyles, backgroundImage: "url(test.jpg)" }}>
    <Box sx={titleText}>
      <Typography sx={{ fontSize: `h1.fontSize`, ...text }}>{title}</Typography>
    </Box>
  </Card>
);

const cardstyles = {
  boxSizing: `border-box`,
  width: "100%",
  height: 500,
  backgroundSize: `cover`,
  backgroundPosition: `center`,
};

const text = {
  color: "#FFD700",
  textShadow: `3px 3px 3px black`,
  fontFamily: "Permanent Marker",
};

const textGray = {
  fontSize: `h3.fontSize`,
  color: `black`,
  textShadow: `3px 3px 3px lightgrey`,
  fontFamily: "Pacifico",
  zIndex: 1,
};
const textLeft = {
  fontSize: `h4.fontSize`,
  p: "5%",
  width: 500,
  alignSelf: "flex-start",
  boxStyling: "border-box",
};

const wrapper = {
  backgroundColor: `rgba(205,168,130,0.3)`,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
};
const textRight = {
  fontSize: `h4.fontSize`,
  p: "5%",
  width: 500,
  alignSelf: "flex-end",
  boxStyling: "border-box",
};

const titleLeft = {
  boxSizing: `border-box`,
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  pl: `10%`,
};
const titleRight = {
  boxSizing: `border-box`,
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  pr: "10%",
};

const titleText = {
  boxSizing: `border-box`,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: "100%",
  height: "100%",
  pr: "10%",
  fontFamily: "Pacifico",
};
