import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import bg from '../../assets/bg.webp'
import InterestingFacts from "../../Components/LandingPage/Banners/InterestingFacts";
import Testimonial from "../../Components/LandingPage/Testimony/Testimonial";
import LegalPracticeArea from "../../Components/LandingPage/LegalPracticeArea/LegalPracticeArea";
import IntroductionSection from "../../Components/LandingPage/IntroductionSection/IntroductionSection";

const useStyle = makeStyles((theme) => {
  return {
    container: {},
    LandingSection: {
      display: "flex",
      flexDirection: "column",
      gap: "80px",
    },
  };
});

const LandingPage = () => {
  const { container, LandingSection } = useStyle();


  return (
    <Box className={container}>
      <Box className={LandingSection}>
        <Box>
          <HeroSection bg={bg} />
        </Box>
        <Box>
          <LegalPracticeArea />
        </Box>
        <Box>
          <InterestingFacts />
        </Box>
        <Box>
          <Testimonial />
        </Box>
        <Box>
          <IntroductionSection />
        </Box>
       
     
        
      </Box>
    </Box>
  );
};

export default LandingPage;
