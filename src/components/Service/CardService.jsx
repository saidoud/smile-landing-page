import React from "react";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Divider from "../ui/Divider";

function CardService({ title, subTitle, iconUrl, link, isBorder }) {
  const classes = useStyles();
  const border = isBorder ? "2px solid #d8d8d9" : "none";

  return (
    <Card className={classes.root}>
      <div className={classes.image}>
        <img
          className={classes.icon}
          alt={title}
          src={iconUrl}
          height="60px"
          width="60px"
          loading="lazy"
        />
      </div>
      <p className={classes.title}>{title}</p>
      <Divider dividerWidth="30px" />
      <p className={classes.subTitle}>{subTitle}</p>
      <a className={classes.link} href={link}>
        Read More
      </a>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    padding: "20px",
    boxShadow: "none",
    borderRadius: "0",
    [theme.breakpoints.down("md")]: {
      border: "none !important",
    },
  },
  image: {
    height: "93px",
    width: "93px",
    position: "relative",
    border: "3px solid",
    borderRadius: "50%",
    borderColor: theme.palette.light,
    marginBottom: "15px",
  },
  icon: {
    position: "absolute",
    top: 15,
    right: 11,
  },
  title: {
    color: theme.palette.secondary.black,
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  subTitle: {
    color: theme.palette.secondary.main,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
    width: "90%",
    marginTop: "10px",
  },
  link: {
    fontSize: "14px",
    textAlign: "inherit",
    fontWeight: "400",
    fontStyle: "normal",
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      borderBottom: "2px solid",
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default CardService;
