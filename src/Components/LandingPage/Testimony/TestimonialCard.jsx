import { Divider, Typography } from "@mui/material";
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
      alignItems: "center",
      position: "relative",
    },
    iconContainer: {
      width: "100px",
      height: "100px",
      background: theme.palette.secondary.main,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

const TestimonialCard = ({ data }) => {
  const { container, subContainer, iconContainer } = useStyle();

  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={iconContainer}>
          <img
            src={data?.image}
            alt={"peoples"}
            style={{ width: "100%", borderRadius: "50%" }}
          />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            {data?.title}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography>{data?.content}</Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Garreth Smith
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ fontSize: "12px" }}>Marketing Manager</Typography>
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          sx={{
            bgcolor: "black",
            width: "80px",
            height: "200px",
            position: "absolute",
            left: "0px",
            transform: "translate(-100%,50%)",
          }}
        />
        <Box
          sx={{
            height: "60px",
            width: "5px",
            bgcolor: (theme) => theme.palette.primary.main,
            borderRadius: "20px",
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(-50%,10%)",
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
