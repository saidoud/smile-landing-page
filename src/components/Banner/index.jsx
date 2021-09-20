import React from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <Image
        className={classes.backgroundImage}
        src="/assets/carousel3.jpg"
        layout="fill"
      /> */}
      <Image
        alt="Mountains"
        src="/assets/carousel3.jpg"
        layout="fill"
        loading="lazy"
      />
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    // position: "relative",
    // height: "calc(100vh - 167px)",
    // width: "100%",
    // backgroundImage: "url(/assets/carousel3-min.jpg)",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundColor: "#cccccc",
    position: "relative",
    height: "100vh",
    overflow: "hidden",
    zIndex: -1,
  },
  // backgroundImage: {
  //   position: "absolute",
  //   top: "0",
  //   bottom: "0",
  //   left: "0",
  //   right: "0",
  // },
});
export default Banner;
