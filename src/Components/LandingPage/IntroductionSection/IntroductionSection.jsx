import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from "@mui/icons-material/Twitter";
import bg from "../../../assets/bg.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GitHubIcon from "@mui/icons-material/GitHub";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "0px 20px",
      background: theme.palette.background.secondary,
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      width: "100%",
      maxWidth: "1440px",
      alignItems: "center",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: "50px",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    intro: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      gap: "20px",
      padding: "20% 10px",
      [theme.breakpoints.down("md")]: {
        padding: "5% 10px",
      },
    },
    imageContainer: {
      width: "70%",
      height: "100%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      background: `url(${bg})`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "400px",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    PlaybuttonContainer: {
      height: "100px",
      width: "100px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.background.main,
      transition: "0.5s",
      "&:hover": {
        boxShadow: "0px 0px 10px 20px rgba(200,200,200,0.3)",
        cursor: "pointer",
      },
    },
  };
});

const IntroductionSection = () => {
  const {
    container,
    subContainer,
    contentContainer,
    intro,
    imageContainer,
    PlaybuttonContainer,
  } = useStyle();

  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={contentContainer}>
          <Box className={imageContainer}>
            <Box className={PlaybuttonContainer}>
              <PlayArrowIcon color="primary" sx={{ fontSize: "45px" }} />
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box className={intro}>
              <Box sx={{ width: "100%" }}>
                <Typography color={"primary"}>HELLO I'M</Typography>
                <Typography variant="h3">Sam15-Code</Typography>
              </Box>
              <Box sx={{ width: "100%", maxWidth: "600px" }}>
                <Typography>
                  Welcome to my web developer portfolio site! I am a skilled web
                  developer with a passion for creating dynamic, user-friendly
                  websites that bring your brand to life. With a strong
                  background in coding languages such as HTML, CSS, and
                  JavaScript, I am dedicated to crafting clean, efficient code
                  that is both functional and visually stunning. Whether you're
                  looking for a simple website to showcase your business, or a
                  complex e-commerce platform with all the bells and whistles, I
                  have the skills and experience to bring your vision to life.
                  Browse my portfolio to see some of my recent projects and get
                  a sense of my design style. And if you're ready to take your
                  online presence to the next level, don't hesitate to reach out
                  - I would love to hear from you!
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Link href="https://github.com/Sam15-code" target={"_blank"}>
                  <GitHubIcon color="primary" />
                </Link>
                <Link href="https://www.linkedin.com/" target={"_blank"}>
                  <LinkedInIcon color="primary" />
                </Link>
                <Link href="https://instagram.com/" target={"_blank"}>
                  <InstagramIcon color="primary" />
                </Link>
                <Link href="https://facebook.com/" target={"_blank"}>
                  <FacebookIcon color="primary" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroductionSection;
