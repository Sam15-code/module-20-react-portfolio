import { Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import ContactsIcon from "@mui/icons-material/Contacts";
import HeaderDrawer from "../Drawer/Drawer";
import { Link } from "react-scroll";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      background:theme.palette.grey[200]
    },
    HeaderContainer: {
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      alignItems: "center",
      width: "100%",
      maxWidth: "1440px",
    },
    LinkContainer: {
      display: "flex",
      gap: "50px",
      cursor: "pointer",
      alignItems: "center",
      [theme.breakpoints.down("lg")]: {
        display: "none",
      },
    },

    NavLinksSection: {
      display: "flex",
      gap: "50px",
      alignItems: "center",
      [theme.breakpoints.down("lg")]: {
        flexWrap: "wrap",
      },
    },
    active: {
      color: theme.palette.grey[500],
      fontWeight: "bold",
    },
    linkStyles: {
      color: theme.palette.black.main,
      fontWeight:'bolder'
    },
    hamburgerIcon: {
      display: "none",
      [theme.breakpoints.down("lg")]: {
        display: "block",
      },
    },
  };
});

const Header = () => {
  const [state, setstate] = useState([
    {
      title: "Home",
      selected: false,
      icon: <HomeIcon />,
      link: "/",
    },
    {
      title: "About Me",
      selected: false,
      icon: <InfoIcon />,
      link: "aboutme",
    },
    {
      title: "Portfolio",
      selected: false,
      icon: <InfoIcon />,
      link: "portfolio",
    },
    {
      title: "Contact",
      selected: false,
      icon: <ContactsIcon />,
      link: "contact",
    },
  ]);
  const {
    container,
    HeaderContainer,
    LinkContainer,
    NavLinksSection,
    active,
    linkStyles,
    hamburgerIcon,
  } = useStyle();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  return (
    <Box className={container}>
      <Box className={HeaderContainer}>
        <Box className={NavLinksSection}>
          <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
            Sam15-
            <Typography component="span" color="primary" variant="h4">
              code.
            </Typography>
          </Typography>
        </Box>

        <Box className={LinkContainer}>
          {state.map((link, i) => {
            return (
              <Typography
                className={link.selected ? active : linkStyles}
                key={i}
                sx={{
                  fontWeight: "bold",
                  "&:hover": { color: (theme) => theme.palette.primary.main },
                }}
              >
                <Link
                  activeClass={active}
                  to={link?.link}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                >
                  {link.title}
                </Link>
              </Typography>
            );
          })}
        </Box>
        <Box className={hamburgerIcon}>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon color="primary" sx={{ fontSize: "25px" }} />
          </IconButton>
        </Box>
      </Box>
      <HeaderDrawer open={open} setOpen={setOpen} list={state} />
    </Box>
  );
};

export default Header;
