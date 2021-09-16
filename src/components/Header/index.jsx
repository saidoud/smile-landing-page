import React from "react";
import Image from "next/image";
import { useStyles } from "./style";
import { AppBar, Container, Toolbar } from "@mui/material";
function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Container>
        <Toolbar>
          {/* Logo */}
          <div className={classes.logo}>
            <Image src="/assets/logo.png" height="44" width="173" />
          </div>
          {/* Navbar */}
          <ul className={classes.navBar}>
            {data.map((item, index) => (
              <li key={index} className={classes.navLink}>
                <a href={item.link}> {item.name}</a>
              </li>
            ))}
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const data = [
  {
    name: "Home",
    link: "https://www.w3schools.com/css",
  },
  {
    name: "About us",
    link: "https://www.google.com/",
  },
  {
    name: "Features",
    link: "https://www.google.com/",
  },
  {
    name: "Pages",
    link: "https://www.google.com/",
  },
  {
    name: "Services",
    link: "https://www.google.com/",
  },
  {
    name: "Shop",
    link: "https://www.google.com/",
  },
  {
    name: "Contact Us",
    link: "https://www.google.com/",
  },
];

export default Header;