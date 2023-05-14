import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      width: "100%",
      maxWidth: "350px",
      padding: "20px",
      flex: 1,
      minWidth: "300px",
   
    
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    iconContainer: {
      width: "100%",
      height: "150px",
      background: theme.palette.secondary.main,
      
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

const LegalPracticeAreaCard = ({ data }) => {
  const { container, subContainer, iconContainer } = useStyle();

  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={iconContainer}>
          <img src={data?.icon} style={{width:'100%',height:'100%'}} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            {data?.title}
          </Typography>
        </Box>
        <Box>
          <Typography>{data?.content}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LegalPracticeAreaCard;
