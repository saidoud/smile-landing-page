import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import HeaderSection from "../ui/HeaderSection";

function Equipment() {
  return (
    <div id="Equipments">
      <HeaderSection
        title="Our Equipments & Surgery"
        subTitle="Explore Case Study Album"
        marginTop="50px"
        marginBottom="50px"
      />
      <ImageList cols={3} gap={0}>
        {images.map((item, index) => (
          <ImageListItem key={index}>
            <img src={item} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const images = [
  "/assets/passion.png",
  "/assets/passion.png",
  "/assets/passion.png",
  "/assets/passion.png",
  "/assets/passion.png",
  "/assets/passion.png",
];
export default Equipment;
