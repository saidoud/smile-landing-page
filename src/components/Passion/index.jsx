import { Grid } from "@mui/material";
import React from "react";
import HeaderSection from "../ui/HeaderSection";
import PassionCard from "./PassionCard";
import { useStyles } from "./style";

function Passion() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      style={{ marginTop: "40px" }}
      id="Features"
    >
      <Grid className={classes.image} item xs={12} md={6}></Grid>
      <Grid className={classes.content} item xs={12} md={6}>
        <Grid container>
          <Grid item xs={12}>
            <HeaderSection
              title="What Makes Us Different"
              subTitle="Passion, Professional, Qualified"
            />
            {data.map((item, index) => (
              <PassionCard
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                imageUrl={item.imageUrl}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const data = [
  {
    title: "Latest Equipment & Technology",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,",
    imageUrl: "/assets/passion1.png",
  },
  {
    title: "Affordable Dental Care",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,",
    imageUrl: "/assets/passion2.png",
  },
  {
    title: "Talented Doctors Team",
    subTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,",
    imageUrl: "/assets/passion3.png",
  },
];

export default Passion;
