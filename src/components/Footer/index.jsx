import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Stack } from "@mui/material";
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
          <Stack direction="row" spacing={1}>
            <FacebookTwoToneIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <GoogleIcon />
          </Stack>
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
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "5px 0px",
    },
  },
  copyright: {
    fontSize: "16px",
    lineHeight: "24px",
    color: theme.palette.light,
    fontWeight: "400",
    letterSpacing: "0.2px",
    flexGrow: 1,
  },
}));
export default Footer;
