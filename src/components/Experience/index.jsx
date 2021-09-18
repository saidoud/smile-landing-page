import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderSection from "../ui/HeaderSection";
import TeamCard from "./TeamCard";

function Experience() {
  return (
    <Container style={{ marginTop: "50px" }}>
      <HeaderSection
        title="Highly Qualified Team Of Dentists"
        subTitle="Professionals who are immensely experienced"
      />
      <Grid container spacing={3} style={{ marginTop: "30px" }}>
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
  },
  {
    title: "Dr. Eugene Reynolds",
    subTitle: "M.D, Orthodontist",
    imageUrl: "/assets/person3.png",
  },
  {
    title: "Dr. Jason Keller",
    subTitle: "M.D, Orthodontist",
    imageUrl: "/assets/person3.png",
  },
];

export default Experience;
