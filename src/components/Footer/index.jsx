import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Stack } from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <div className={classes.mainFooter}>
        <Container>
          <Grid container>
            <Grid xs={12} sm={6} md={3}>
              <p>Footer 1</p>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <p>Footer 2</p>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <p>Footer 3</p>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
              <p>Footer 4</p>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={classes.secondFooter}>
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
      </div>
    </footer>
  );
}

const useStyles = makeStyles((theme) => ({
  secondFooter: {
    marginTop: "40px",
    height: "70px",
    backgroundColor: theme.palette.secondary.black,
  },
  mainFooter: {},
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
