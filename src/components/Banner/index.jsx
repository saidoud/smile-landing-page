import React from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import ParticleBackground from "../ui/ParticleBackground";

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <Image
        alt="Mountains"
        src="/assets/carousel3-min.jpg"
        layout="fill"
        loading="eager"
      /> */}
      <ParticleBackground />
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    backgroundColor: "#26ADE4",
    position: "relative",
    height: "400px",
    overflow: "hidden",
    zIndex: -1,
  },
});
export default Banner;
