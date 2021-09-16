import React from "react";
import { makeStyles } from "@mui/styles";
import { Avatar } from "@mui/material";

function Contact({ title, subTitle, link, Icon }) {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <Avatar className={classes.avatar}>
        <Icon className={classes.icon} />
      </Avatar>
      <div className={classes.contactDetail}>
        <p className={classes.title}>{title}</p>
        <a className={classes.subTitle} href={link}>
          {subTitle}
        </a>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  contact: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: theme.palette.primary.main,
  },
  avatar: {
    backgroundColor: theme.palette.white,
    marginRight: "15px",
    height: "55px",
    width: "55px",
    boxShadow: "0 3px 8px 0 rgb(0 0 0 / 20%)",
  },
  contactDetail: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: "700",
    marginTop: "0px",
    marginBottom: "5px",
  },
  subTitle: {
    textDecoration: "none",
    fontFamily: "Poppins",
    fontSize: "14px",
    textAlign: "inherit",
    fontWeight: "400",
    fontStyle: "normal",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

export default Contact;
