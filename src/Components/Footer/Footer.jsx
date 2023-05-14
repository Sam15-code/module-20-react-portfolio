import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditLocationIcon from "@mui/icons-material/EditLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Fade } from "react-awesome-reveal";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
      background: theme.palette.background.footer,
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      width: "100%",
      maxWidth: "1440px",
      alignItems: "center",
      padding: "20px 0px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      
      [theme.breakpoints.down("md")]: {
        width: "auto",
        justifyContent: "space-between",
        flexWrap:'wrap'
      },
    },
    cardContainer: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      maxWidth: "300px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    iconContainer: {
      height: "60px",
      width: "60px",
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      transition: "0.5s",
      background: theme.palette.grey[900],
      "&:hover": {
        background: theme.palette.grey[700],
        cursor: "pointer",
      },
    },
    links: {
      transition: "0.5s",
      "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer",
      },
    },
  };
});

const Footer = () => {
  const {
    container,
    subContainer,
    contentContainer,
    cardContainer,
    iconContainer,
    links,
  } = useStyle();

  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={contentContainer}>
          <Box className={cardContainer}>
            <Box>
              <Typography variant="h5" color={"primary"}>
                About Me
              </Typography>
            </Box>
            <Box>
              <Typography color={"secondary"}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <Fade direction="up" duration={1000}>
                <Box className={iconContainer}>
                  <a
                    href="#"
                    target={"_blank"}
                  >
                    <LinkedInIcon color="primary" sx={{ fontSize: "25px" }} />
                  </a>
                </Box>
              </Fade>

              <Fade direction="up" duration={1500}>
                <Box className={iconContainer}>
                  <a href="https://www.facebook.com/" target={"_blank"}>
                    <FacebookIcon color="primary" sx={{ fontSize: "25px" }} />
                  </a>
                </Box>
              </Fade>
              <Fade direction="up" duration={2000}>
                <Box className={iconContainer}>
                  <a href="https://www.twitter.com/" target={"_blank"}>
                    <TwitterIcon color="primary" sx={{ fontSize: "25px" }} />
                  </a>
                </Box>
              </Fade>
            </Box>
          </Box>

          <Box className={cardContainer}>
            <Box>
              <Typography variant="h5" color={"primary"}>
                Usefull Links
              </Typography>
            </Box>
          </Box>
          <Box className={cardContainer}>
            <Box>
              <Typography variant="h5" color={"primary"}>
                Quick Links
              </Typography>
            </Box>
            <Box>
              <Typography className={links}>About Us</Typography>
              <Typography className={links}>FAQs</Typography>
            </Box>
          </Box>

          <Box className={cardContainer}>
            <Box>
              <Typography variant="h5" color={"primary"}>
                Have a Questions?
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box>
                  <EditLocationIcon color="primary" />
                </Box>
                <Box>
                  <Typography>
                    711 W Bay Area Blvd, Ste 276 Webster, Texas, 77598
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box>
                  <LocalPhoneIcon color="primary" />
                </Box>
                <Box>
                  <Typography>+1 832 224 6963</Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box>
                  <EmailIcon color="primary" />
                </Box>
                <Box>
                  <Typography> ibtissam.dxb@gmail. com</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography color={"primary"} sx={{ fontWeight: 400 }}>
            Copyright ©2023 All rights reserved | This template is made by
            Sam15-code
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
