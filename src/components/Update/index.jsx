import { Container, Grid } from "@mui/material";
import React from "react";
import HeaderSection from "../ui/HeaderSection";
import PostCard from "./PostCard";

function Update() {
  return (
    <div>
      <HeaderSection
        title="Recent Updates On Dental News"
        subTitle="Stay updated with dental news"
        marginTop="50px"
        marginBottom="50px"
      />
      <Container>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PostCard
                title={item.title}
                imageUrl={item.imageUrl}
                detail={item.detail}
                date={item.date}
                userName={item.userName}
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
    title: "Regular check ups leads to healthy life",
    imageUrl: "/assets/post1.jpg",
    detail:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and",
    date: "June 30, 2021",
    userName: "Admin",
  },
  {
    title: "Best dental clinic in your country",
    imageUrl: "/assets/post1.jpg",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
    date: "June 30, 2021",
    userName: "Admin",
  },
  {
    title: "How to get rid of bad smell in between teeth",
    imageUrl: "/assets/post1.jpg",
    detail:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
    date: "June 30, 2021",
    userName: "Admin",
  },
];

export default Update;
