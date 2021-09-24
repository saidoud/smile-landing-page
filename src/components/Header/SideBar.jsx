import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";

function SideBar({ isOpen, onToggle }) {
  const classes = useStyles();
  return (
    <aside
      className={classes.root}
      style={{ opacity: isOpen ? "100%" : "0", top: isOpen ? "0" : "-100%" }}
    >
      <div>
        <IconButton className={classes.closeIcon} onClick={onToggle}>
          <CloseIcon fontSize="large" />
        </IconButton>
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
}));

export default SideBar;
