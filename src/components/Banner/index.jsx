import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div style={{ height: "400px" }}>
      <Image
        src="/assets/carousel1.jpeg"
        layout="responsive"
        height="400px"
        width="100%"
      />
    </div>
  );
}

export default Banner;
