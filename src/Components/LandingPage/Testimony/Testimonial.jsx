import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Carousel from "react-grid-carousel";
import TestimonialCard from "./TestimonialCard";
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
      textAlign: "center",
      width: "100%",
      maxWidth: "550px",
    },
  };
});

const Testimonial = () => {
  const { container, subContainer, headingContainer } = useStyle();
  const [cardData] = useState([
    {
      image:
        "https://preview.colorlib.com/theme/marco2/images/person_2.jpg.webp",
      title: "Thomas J.",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      image:
        "https://preview.colorlib.com/theme/marco2/images/person_1.jpg.webp",
      title: "Albert Sen",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      image:
        "https://preview.colorlib.com/theme/marco2/images/person_1.jpg.webp",
      title: "Robert Jr",
      content:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
  ]);
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={headingContainer}>
          <Typography  color={"primary"}>
            TESTIMONY
          </Typography>
          <Typography variant="h3">My satisfied customer says</Typography>
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
            hideArrow={true}
            showDots={true}
            autoplay={5000}
          >
            {cardData?.map((data, i) => {
              return (
                <Carousel.Item key={i}>
                  <TestimonialCard data={data} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
