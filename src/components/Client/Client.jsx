import { Container, Stack } from "@mui/material";
import React from "react";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

function Client() {
  const classes = useStyles();

  function ClientContainer({ imageUrl }) {
    return (
      <div className={classes.client}>
        <Image
          className={classes.image}
          src={imageUrl}
          width="150px"
          height="40px"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="space-between"
        >
          {data.map((item, index) => (
            <ClientContainer key={index} imageUrl={item} />
          ))}
        </Stack>
      </Container>
    </div>
  );
}

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.black,
    padding: "30px 0px",
    marginTop: "40px",
  },
  client: {
    padding: "40px 25px",
    background: "#ffffff",
    borderRadius: "8px",
    margin: "10px 8px",
    textAlign: "center",
  },
  image: {
    opacity: "0.5",
    "&:hover": {
      opacity: "1",
      transition: "opacity 0.5s",
    },
  },
}));

const data = [
  "/assets/client1.png",
  "/assets/client1.png",
  "/assets/client1.png",
  ,
  "/assets/client1.png",
  ,
  "/assets/client1.png",
];

export default Client;
