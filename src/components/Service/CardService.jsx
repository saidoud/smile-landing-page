import React from "react";
import Image from "next/image";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";

function CardService({ title, subTitle, iconUrl, link }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.image}>
        <Image src={iconUrl} height="50px" width="50px" />
      </div>
      <p className={classes.title}>{title}</p>
      <div></div>
      <p className={classes.subTitle}>{subTitle}</p>
      <a className={classes.link} href={link}>
        Read More
      </a>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  image: {},
  title: {
    color: theme.palette.secondary.black,
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "700",
    marginTop: "10px",
    marginBottom: "22px",
  },
  divider: {},
  subTitle: {
    color: theme.palette.secondary.main,
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "400",
  },
  link: {},
}));

export default CardService;
