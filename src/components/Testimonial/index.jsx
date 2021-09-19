import { Button, Container, Grid, Stack } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import React from "react";
import HeaderSection from "../ui/HeaderSection";
import TeamCard from "./TeamCard";
import { useStyles } from "./style";

function Testimonial() {
  const classes = useStyles();

  const Contact = ({ Icon, title }) => (
    <Stack flexDirection="row" style={{ marginRight: "50px" }}>
      <Icon className={classes.contactIcon} />
      <a className={classes.contactLink} href="#">
        {title}
      </a>
    </Stack>
  );

  return (
    <>
      <div className={classes.root}>
        <Container>
          <HeaderSection subTitle="Testimonials" title="Our Success Stories" />
          <Grid container spacing={3} style={{ paddingTop: "100px" }}>
            {data.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <TeamCard
                  imageUrl={item.imageUrl}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      <div className={classes.appointment}>
        <Container>
          <div style={{ padding: "50px 0" }}>
            <p className={classes.title}>
              Consult Our Expert & Get Quick Appointment
            </p>
            <Stack flexDirection="row">
              <Contact Icon={MailOutlineIcon} title="Email:info@example.com" />
              <Contact Icon={CallIcon} title="Email:info@example.com" />
            </Stack>
            <Button className={classes.button}>Get In Touch</Button>
          </div>
        </Container>
      </div>
    </>
  );
}

const data = [
  {
    imageUrl: "/assets/team1.jpg",
    title: "Dr. Jason Keller",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    imageUrl: "/assets/team1.jpg",
    title: "Dr. Eugene Reynolds",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
  {
    imageUrl: "/assets/team1.jpg",
    title: "Dr. Katharine Martin",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
  },
];

export default Testimonial;
