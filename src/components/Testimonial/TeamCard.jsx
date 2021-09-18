import { Avatar, Card } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

function TeamCard({ title, subTitle, imageUrl }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Avatar
        alt={title}
        src={imageUrl}
        sx={{ width: 110, height: 110, border: "10px solid #d4effa" }}
        className={classes.avatar}
      />
      <p className={classes.title}>{title}</p>
      <p className={classes.subTitle}>{subTitle}</p>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.white,
    position: "relative",
    textAlign: "center",
    boxShadow: "0 0px 5px 0px rgb(0 0 0 / 10%)",
    overflow: "visible",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "50px",
    },
    [theme.breakpoints.up("xs")]: {
      marginBottom: "50px",
    },
  },
  avatar: {
    position: "absolute",
    top: "-23%",
    left: "35%",
  },
  title: {
    fontSize: "18px",
    lineHeight: "22px",
    color: theme.palette.secondary.black,
    fontWeight: "700",
    paddingBottom: "20px",
    paddingTop: "74px",
  },
  subTitle: {
    fontSize: "16px",
    lineHeight: "24px",
    color: theme.palette.secondary.main,
    fontWeight: "400",
    padding: "30px 10px",
  },
}));

export default TeamCard;
