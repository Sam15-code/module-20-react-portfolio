import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import { Fade } from "react-awesome-reveal";
const useStyle = makeStyles(() => {
  return {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundPosition:'center',
      backgroundSize: "cover"
    },
  };
});

const TopHeroSection = ({ content, bg }) => {
  const { container } = useStyle();
  return (
    <Box
      className={container}
      sx={{
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${bg})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
      }}
    >
      <Box>
        <Fade direction="up" duration={1000}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: (theme) => theme.palette.white.main,
            textTransform: "uppercase",
            wordSpacing: "5px",
          }}
        >
          {content}
        </Typography>
        </Fade>
      </Box>
    </Box>
  );
};

export default TopHeroSection;
