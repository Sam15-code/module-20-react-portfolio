import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import TopHeroSection from "../../Components/TopHeroSection/TopHeroSection";
import contactus from "../../assets/contactus.webp";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      gap: "20px",
      padding: "5% 20px",
      alignItems: "center",
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      maxWidth: "1440px",
    },
    headingContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "start",
      textAlign: "left",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
      padding: "20px 0px",
    },
    card: {
      width: "100%",
      maxWidth: "250px",
      padding: "10px",
      background: theme.palette.grey[200],
    },
    cardContainer: {
      width: "100%",
      display: "flex",
      gap: "40px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
        justifyContent: "center",
      },
    },
    formContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
      },
    },
    formSection: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    MapSection: {
      width: "100%",
    [theme.breakpoints.down('md')]:{
      height:'400px'
    }
 
    },
  };
});

const Contactus = () => {
  const {
    container,
    subContainer,
    headingContainer,
    contentContainer,
    cardContainer,
    card,
    MapSection,
    formSection,
    formContainer,
  } = useStyle();

  return (
    <Box id={"contact"}>
      <Box sx={{ width: "100%" }}>
        <TopHeroSection content={"Contact Us"} bg={contactus} />
      </Box>
      <Box className={container}>
        <Box className={subContainer}>
          <Box className={headingContainer}>
            <Typography color={"primary"}>Contact Us</Typography>
            <Typography variant="h3">Contact Information</Typography>
          </Box>
          <Box className={contentContainer}>
            <Box className={cardContainer}>
              <Box className={card}>
                <Typography sx={{ fontWeight: "bold" }}>Address: </Typography>
                <Typography>
                  711 W Bay Area Blvd, Ste 276 Webster, Texas, 77598
                </Typography>
              </Box>

              <Box className={card}>
                <Typography sx={{ fontWeight: "bold" }}>Phone: </Typography>
                <Typography>+1 832 224 6963</Typography>
              </Box>

              <Box className={card}>
                <Typography sx={{ fontWeight: "bold" }}>Email: </Typography>
                <Typography> ibtissam.dxb@gmail. com</Typography>
              </Box>
              <Box className={card}>
                <Typography sx={{ fontWeight: "bold" }}>Website: </Typography>
                <Typography></Typography>
              </Box>
            </Box>
          </Box>

          <Box className={formContainer}>
            <Box className={formSection}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <FormControl fullWidth>
                  <TextField name="name" placeholder="Your Name" fullWidth />
                </FormControl>
                <FormControl fullWidth>
                  <TextField name="email" placeholder="Your Email" fullWidth />
                </FormControl>
                <FormControl fullWidth>
                  <TextField name="subject" placeholder="Subject" fullWidth />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    name="message"
                    placeholder="Message"
                    fullWidth
                    multiline
                    minRows={8}
                  />
                </FormControl>
              </Box>
              <Box>
                <Button
                  sx={{
                    padding: "15px 30px",
                    borderRadius: "50px",
                    background: (theme) => theme.palette.background.main,
                    color: (theme) => theme.palette.white.main,
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
            <Box className={MapSection}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.0804930869604!2d-95.1351968!3d29.5431501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409c85b2517347%3A0x422336e59ca301d1!2s711%20Bay%20Area%20Blvd%20Ste%20276%2C%20Webster%2C%20TX%2077598%2C%20USA!5e0!3m2!1sen!2s!4v1675405325988!5m2!1sen!2s"
                title="location"
                style={{ height: "100%", width: "100%", border: "none" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contactus;
