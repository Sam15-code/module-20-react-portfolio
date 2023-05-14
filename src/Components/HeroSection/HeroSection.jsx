import { Box, Divider, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import bg from "../../assets/bg.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Fade } from "react-awesome-reveal";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      height: "100vh",
    },
    subContainer: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
    },
    rightSection: {
      width: "39%",
      height: "100vh",
      background: theme.palette.background.main,
      position: "relative",
    },
    leftSection: {
      width: "61%",
      height: "100vh",
      background: `url(${bg})`,
      backgroundPosition: "100% 0%",
      backgroundSize: "cover",
    },
    contentContainer: {
      padding: "20px",
      transition: "0.5s",
      maxWidth: "800px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
        padding: "0px",
        top: "35%",
        left: "5%",
      },
    },
    contentBox: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    buttonBackground: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      position: "absolute",
      top: "0px",
      left: "0px",
      transform: "translate(0%,60%)",
      zIndex: "10000",
    },
    buttonStyling: {
      width: "200px",
      position: "relative",
      display: "flex",
      justifyContent: "end",
      cursor: "pointer",
      transition: "0.4s",
    },
    playButton: {
      height: "100px",
      width: "100px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.background.secondary,
      position: "absolute",
      right: "0px",
      top: "60%",
      transition: "0.5s",
      transform: "translateX(50%)",
      "&:hover": {
        boxShadow: "0px 0px 20px 20px rgba(200,200,200,0.5)",
        cursor: "pointer",
      },
      [theme.breakpoints.down("lg")]: {
        width: "80px",
        height: "80px",
        top: "70%",
      },
    },
    AbsoluteContent: {
      width: "80%",
      maxWidth: "1440px",
      position: "absolute",
      top: "30%",
      textAlign: "left",
      display: "flex",
      justifyContent: "start",
      padding: "20px",
      [theme.breakpoints.down("lg")]: {
        width: "auto",
      },
    },
  };
});

const HeroSection = ({ bg }) => {
  const {
    container,
    subContainer,
    rightSection,
    leftSection,
    contentContainer,
    contentBox,
    buttonBackground,
    buttonStyling,
    playButton,
    AbsoluteContent,
  } = useStyle();
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={rightSection}>
          <Box className={playButton}>
            <PlayArrowIcon color="primary" sx={{ fontSize: "35px" }} />
          </Box>
        </Box>
        <Box className={leftSection}></Box>

        <Box className={AbsoluteContent}>
          <Box className={contentContainer}>
            <Fade duration={1000} direction={"up"}>
              <Box className={contentBox}>
                <Box>
                  <Typography
                    variant="h4"
                    color={"primary"}
                    sx={{ fontWeight: "bold" }}
                  >
                    Hello,
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: "bold",
                      color: (theme) => theme.palette.white.main,
                    }}
                  >
                    I'm Sam15-Code
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                    QuickBooks ProAdvisor
                  </Typography>
                </Box>
                <Box className={buttonStyling}>
                  <Box>
                    <Box
                      sx={{
                        height: "60px",

                        top: "0px",
                        width: "140px",
                        background: (theme) => theme.palette.secondary.main,
                      }}
                    ></Box>
                    <Box className={buttonBackground}>
                      <Typography
                        sx={{ color: (theme) => theme.palette.white.main }}
                      >
                        Contact Me
                      </Typography>
                      <Divider
                        sx={{
                          width: "50px",
                          height: "2px",
                          bgcolor: (theme) => theme.palette.white.main,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
