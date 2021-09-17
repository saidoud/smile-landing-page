import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, CardMedia } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

function TeamCard({ title, subTitle, imageUrl }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia component="img" image={imageUrl} alt="green iguana" />
      <CardContent>
        <p className={classes.title}>{title}</p>
        <p className={classes.subTitle}>{subTitle}</p>
        <div className={classes.icons}>
          <FacebookIcon className={classes.icon} />
          <TwitterIcon className={classes.icon} />
          <GoogleIcon className={classes.icon} />
          <LinkedInIcon className={classes.icon} />
          <PinterestIcon className={classes.icon} />
        </div>
      </CardContent>
    </Card>
  );
}
const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    textAlign: "center",
  },
  title: {
    fontSize: "18px",
    lineHeight: "22px",
    color: "#282b33",
    fontWeight: "700",
    fontStyle: "normal",
    marginBottom: "10px",
  },
  subTitle: {
    fontSize: "16px",
    lineHeight: "24px",
    color: "#3b3b3f",
    fontWeight: "400",
    fontFamily: "Poppins",
  },
  icons: {
    border: "1px solid #eaeaea",
    color: "#BABABA",
    padding: " 5px 10px",
    marginTop: "15px",
  },
  icon: {
    marginRight: "10px",
  },
});

export default TeamCard;
