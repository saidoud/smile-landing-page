import React from "react";
import { makeStyles } from "@mui/styles";

function PassionCard({ title, subTitle, imageUrl }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.image} src={imageUrl} />
      <div className={classes.content}>
        <p className={classes.title}>{title}</p>
        <p className={classes.subTitle}> {subTitle}</p>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "40px",
  },
  image: {
    height: "30px",
    wdth: "30px",
    paddingRight: "40px",
  },
  content: {},
  title: {
    fontSize: "24px",
    lineHeight: "30px",
    color: "#282b33",
    fontweight: "700",
    paddingBottom: "10px",
  },
  subTitle: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#3b3b3f",
    fontweight: "400",
    width: "80%",
  },
}));

export default PassionCard;
