import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import ScrollToTop from "react-scroll-to-top/dist";
import theme from "./theme/theme";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Aboutme from "./Pages/AboutMe/Aboutme";
import Contactus from "./Pages/Contactus/Contactus";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Box>
          <Header />
          <LandingPage />
          <Aboutme />
          <Contactus />
          <Footer />
        </Box>
      </ThemeProvider>
      <ScrollToTop smooth />
    </Box>
  );
};

export default App;
