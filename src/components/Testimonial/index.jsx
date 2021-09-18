import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderSection from "../ui/HeaderSection";
import TeamCard from "./TeamCard";
import { useStyles } from "./style";

function Testimonial() {
  const classes = useStyles();
  return (
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
