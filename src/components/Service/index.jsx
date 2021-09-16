import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderSection from "../ui/HeaderSection";
import CardService from "./CardService";

function Service() {
  return (
    <div>
      <HeaderSection
        title="Explore Dental Care Services"
        subTitle="Let us brighten your smile!"
      />
      <Container>
        <Grid container style={{ marginTop: "50px" }}>
          <Grid item md={4}>
            <CardService
              title="Teeth Whitening"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id"
              iconUrl="/assets/dentiste1.png"
            />
          </Grid>
          <Grid item md={4}>
            <p>Grid 2</p>
          </Grid>
          <Grid item md={4}>
            <p>Grid 3</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Service;
