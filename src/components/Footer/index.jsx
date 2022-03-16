import React from "react";
import Image from "next/image";
import { Container, Grid, Stack } from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import { useStyles } from "./style";
import Input from "../ui/Input";

function Footer() {
  const classes = useStyles();

  const FooterHead = ({ children }) => (
    <p className={classes.footerHead}>{children}</p>
  );

  const Contact = ({ title, subTitle, Icon }) => (
    <Stack flexDirection="row" style={{ marginBottom: "10px" }}>
      <div style={{ marginRight: "10px" }}>
        <Icon />
      </div>

      <Stack flexDirection="column">
        <p className={classes.title}>{title}</p>
        <p className={classes.subTitle}>{subTitle}</p>
      </Stack>
    </Stack>
  );

  return (
    <footer id="About">
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
              <p className={classes.paragraph}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s.
              </p>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                style={{ width: "150px", marginTop: "4em" }}
              >
                <a href="#">
                  <FacebookTwoToneIcon color="secondary" />
                </a>
                <a href="#">
                  <TwitterIcon color="secondary" />
                </a>
                <a href="#">
                  <LinkedInIcon color="secondary" />
                </a>
                <a href="#">
                  <GoogleIcon color="secondary" />
                </a>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FooterHead>Testimonials</FooterHead>
              <p className={classes.paragraph} style={{ marginBottom: "1em" }}>
                Pork chop drumstick eiusmod short ribs short loin boudln ground
                round pork loin in harm hock excepteur occaecat
              </p>
              <a href="#/" className={classes.link}>
                -James Martin
              </a>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FooterHead>Contact Us</FooterHead>
              <Contact
                title="Give us a Call"
                subTitle="(01) 123 456 7890"
                Icon={CallIcon}
              />
              <Contact
                title="Send us a Message"
                subTitle="info@example.com"
                Icon={EmailIcon}
              />
              <Contact
                title=""
                subTitle="E-51, phase 8B, Mohali, Punjab, 151001"
                Icon={RoomIcon}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FooterHead>Subscribe</FooterHead>
              <Input
                name="name"
                type="text"
                placeholder="Name"
                size={40}
                style={{ marginBottom: "20px" }}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                size={40}
                style={{ marginBottom: "20px" }}
              />
              <button className={classes.primary}>Send</button>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* Second Footer */}
      <div className={classes.secondFooter}>
        <Container sx={{ textAlign: "center" }}>
          <div className={classes.container}>
            <p className={classes.copyright}>
              Copyright 2022 Said Ouddou | All Rights Reserved
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
