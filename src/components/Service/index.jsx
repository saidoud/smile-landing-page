import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderSection from "../ui/HeaderSection";
import CardService from "./CardService";

function Service() {
  return (
    <div style={{ marginTop: "50px" }} id="Services">
      <HeaderSection
        title="Explore Dental Care Services"
        subTitle="Let us brighten your smile!"
      />
      <Container>
        <Grid container spacing={3} style={{ marginTop: "50px" }}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardService
                title={item.title}
                subTitle={item.subTitle}
                iconUrl={item.iconUrl}
                link={item.link}
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
    title: "Teeth Whitening",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id",
    iconUrl: "/assets/dentiste1.png",
    link: "https://www.google.com/",
  },

  {
    title: "Cosmetic Dentistry",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id",
    iconUrl: "/assets/dentiste2.png",
    link: "https://www.google.com/",
  },

  {
    title: "Dental Implants",
    subTitle:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt",
    iconUrl: "/assets/dentiste3.png",
    link: "https://www.google.com/",
  },
  {
    title: "Root Canal Therapy",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id",
    iconUrl: "/assets/dentiste4.png",
    link: "https://www.google.com/",
  },
  {
    title: "Smile Enhanment",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id",
    iconUrl: "/assets/dentiste5.png",
    link: "https://www.google.com/",
  },
  {
    title: "Routine Checkup",
    subTitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id",
    iconUrl: "/assets/dentiste6.png",
    link: "https://www.google.com/",
  },
];

export default Service;
