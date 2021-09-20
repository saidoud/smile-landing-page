import React from "react";
import Image from "next/image";
import { Container, Grid, Stack } from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import { useStyles } from "./style";
import Input from "../ui/Input";

function Footer() {
  const classes = useStyles();

  const FooterHead = ({ children }) => (
    <p className={classes.footerHead}>{children}</p>
  );

  const Contact = ({ title, subTitle, Icon }) => <p></p>;

  return (
    <footer>
      {/* Main Footer */}
      <div className={classes.mainFooter}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Image
                src="/assets/logo.png"
                height="44"
                width="173"
                loading="lazy"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s.
              </p>
              <Stack flexDirection="row" alignItems="center">
                <FacebookTwoToneIcon />
                <TwitterIcon />
                <LinkedInIcon />
                <GoogleIcon />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FooterHead>Testimonials</FooterHead>
              <p>
                Pork chop drumstick eiusmod short ribs short loin boudln ground
                round pork loin in harm hock excepteur occaecat
              </p>
              <a href="#/">-James Martin</a>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FooterHead>Contact Us</FooterHead>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FooterHead>Subscribe</FooterHead>
              <Input name="name" type="text" placeholder="Name" size={40} />
              <Input name="email" type="email" placeholder="Email" size={40} />
              <button className={classes.primary}>Send</button>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Second Footer */}
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

export default Footer;
