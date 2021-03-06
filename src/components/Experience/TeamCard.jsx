import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, CardMedia } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import useAnimation from "../../hooks/useAnimation";

function TeamCard({ title, subTitle, imageUrl }) {
  const classes = useStyles();
  useAnimation();

  return (
    <Card className={classes.root} data-aos="zoom-in">
      <CardMedia component="img" image={imageUrl} alt={title} loading="lazy" />
      <CardContent>
        <p className={classes.title}>{title}</p>
        <p className={classes.subTitle}>{subTitle}</p>
        <div className={classes.icons}>
          <a href="#">
            <FacebookIcon className={classes.icon} />
          </a>
          <a href="#">
            <TwitterIcon className={classes.icon} />
          </a>
          <a href="#">
            <GoogleIcon className={classes.icon} />
          </a>
          <a href="#">
            <LinkedInIcon className={classes.icon} />
          </a>
          <a href="#">
            <PinterestIcon className={classes.icon} />
          </a>
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
    padding: " 10px 10px",
    paddingTop: "15px",
    paddingBottom: "10px",
    marginTop: "15px",
  },
  icon: {
    marginRight: "10px",
  },
});

export default TeamCard;
