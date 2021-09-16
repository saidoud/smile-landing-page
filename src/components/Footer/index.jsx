import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container>
        <div className={classes.container}>
          <p className={classes.copyright}>
            Copyright 2019 SmileCare Theme | All Rights Reserved
          </p>
          <div className={classes.icons}>
            <FacebookTwoToneIcon className={classes.facebook} color="primary" />
            <TwitterIcon color="primary" />
            <LinkedInIcon color="primary" />
            <GoogleIcon color="primary" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "40px",
    height: "70px",
    backgroundColor: theme.palette.secondary.black,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: "70px",
  },
  copyright: {
    fontSize: "16px",
    lineHeight: "24px",
    color: theme.palette.light,
    fontWeight: "400",
    letterSpacing: "0.2px",
    flexGrow: 1,
  },
  facebook: {},
  icons: {},
}));
export default Footer;
