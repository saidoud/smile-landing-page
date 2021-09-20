import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import HeaderSection from "../ui/HeaderSection";
import TeamCard from "./TeamCard";
import Aos from "aos";

function Experience() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <Container style={{ marginTop: "50px" }}>
      <HeaderSection
        title="Highly Qualified Team Of Dentists"
        subTitle="Professionals who are immensely experienced"
      />
      <Grid
        container
        spacing={3}
        style={{ marginTop: "30px" }}
        data-os="fade-left"
      >
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TeamCard
              title={item.title}
              subTitle={item.subTitle}
              imageUrl={item.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

const data = [
  {
    title: "Dr. Johnson Deo",
    subTitle: "M.D, Orthodontist",
    imageUrl: "/assets/person3.png",
    animation: "fade-left",
  },
  {
    title: "Dr. Eugene Reynolds",
    subTitle: "M.D, Orthodontist",
    imageUrl: "/assets/person3.png",
    animation: "fade-up",
  },
  {
    title: "Dr. Jason Keller",
    subTitle: "M.D, Orthodontist",
    imageUrl: "/assets/person3.png",
    animation: "fade-right",
  },
];

export default Experience;
