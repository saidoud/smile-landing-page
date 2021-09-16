import React from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

function Banner() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Image
        className={classes.backgroundImage}
        src="/assets/carousel2.jpg"
        layout="fill"
      />
    </div>
  );
}

export const useStyles = makeStyles({
  container: {
    position: "relative",
    height: "calc(100vh - 167px)",
    width: "100%",
  },
  backgroundImage: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  },
});
export default Banner;
