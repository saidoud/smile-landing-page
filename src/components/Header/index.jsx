import React from "react";
import Image from "next/image";
import { useStyles } from "./style";
import { AppBar, Container, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ onToggle }) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Container maxWidth="lg">
        <Toolbar>
          {/* Logo */}
          <div className={classes.logo}>
            <Image
              src="/assets/logo.png"
              height="44"
              width="173"
              loading="eager"
            />
          </div>
          {/* Navbar */}
          <ul className={classes.navBar}>
            {data.map((item, index) => (
              <li key={index} className={classes.navLink}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          {/* Mobile Icon */}
          <IconButton onClick={onToggle} className={classes.mobileIcon}>
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const data = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Services",
    link: "#Services",
  },
  {
    name: "Features",
    link: "#Features",
  },
  {
    name: "Team",
    link: "#Team",
  },

  {
    name: "Testimonials",
    link: "#Testimonials",
  },
  {
    name: "Equipments",
    link: "#Equipments",
  },
  {
    name: "About us",
    link: "#About",
  },
];

export default Header;
