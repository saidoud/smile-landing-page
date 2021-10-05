import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Stack, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

function SideBar({ isOpen, onToggle }) {
  const classes = useStyles();
  if (!isOpen) return null;
  return (
    <aside
      className={classes.root}
      style={{ opacity: isOpen ? "100%" : "0", top: isOpen ? "0" : "-100%" }}
    >
      <div>
        <IconButton className={classes.closeIcon} onClick={onToggle}>
          <CloseIcon fontSize="large" />
        </IconButton>
        <Stack
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {data.map((item, index) => (
            <Button onClick={onToggle} key={index} className={classes.navLink}>
              <a href={item.link}>{item.name}</a>
            </Button>
          ))}
        </Stack>
      </div>
    </aside>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    zIndex: 999,
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    top: 0,
    left: 0,
    transition: "0.3s ease-in-out",
  },
  closeIcon: {
    position: "absolute",
    top: "1.2rem",
    right: "1.5rem",
    background: "transparent",
    fontSize: "2rem",
    cursor: "pointer",
    outline: "none",
  },
  navLink: {
    marginTop: "15px",
    padding: "5px 0px",
    textTransform: "capitalize",
    "& a": {
      textDecoration: "none",
      fontSize: "25px",
      color: theme.palette.secondary.main,
      fontFamily: "Lato",
      "&:hover": {
        color: "white",
      },
    },
  },
}));

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

export default SideBar;
