import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import LegalPracticeAreaCard from "../LegalPracticeAreaCard";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import InsightsIcon from "@mui/icons-material/Insights";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import GavelIcon from "@mui/icons-material/Gavel";
import Carousel from "react-grid-carousel";
const useStyle = makeStyles(() => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      width: "100%",
      maxWidth: "1440px",
      alignItems: "center",
      padding: "20px 0px",
    },
    headingContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      textAlign: "left",
      width: "100%",
      maxWidth: "550px",
    },
  };
});

const LegalPracticeArea = () => {
  const { container, subContainer, headingContainer } = useStyle();
  const [cardData] = useState([
    {
      icon: "https://venngage-wordpress.s3.amazonaws.com/uploads/2020/08/Coming-Soon-Landing-Page.png",
      title: "Venngage.",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: "https://storage.googleapis.com/website-production/uploads/2017/03/problogger-landing-page.png",
      title: "Client Portfolio",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: "https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/Home-Loan-Gurus-Crop.png",
      title: "Traveler",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      icon: "https://mk0zofoqaluvgdskgvsb.kinstacdn.com/photos/Linkedin-Crop.png",
      title: "Law Suite",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
  ]);
  return (
    <Box className={container} id={'portfolio'}>
      <Box className={subContainer}>
        <Box className={headingContainer}>
          <Typography color={"primary"} sx={{ textAlign: "left" }}>
            Portfolio
          </Typography>
          <Typography variant="h3" sx={{ textAlign: "left" }}>
            My Professional Work
          </Typography>
          <Typography>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Carousel
            cols={3}
            rows={1}
            gap={10}
            loop
            hideArrow={false}
            showDots={true}
            autoplay={5000}
          >
            {cardData?.map((data, i) => {
              return (
                <Carousel.Item key={i}>
                  <Box sx={{padding:'20px'}}>
                    <LegalPracticeAreaCard data={data} />
                  </Box>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default LegalPracticeArea;
