import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";

function Result() {
  const classes = useStyles();
  const Counter = ({ count, title }) => (
    <div className={classes.counter}>
      <p className={classes.count}>{count}</p>
      <p className={classes.title}>{title}</p>
    </div>
  );

  return (
    <div className={classes.root}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: "#d8d8d9" }}
            />
          }
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          {data.map((item, index) => (
            <Counter count={item.count} title={item.title} key={index} />
          ))}
        </Stack>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(/assets/counter-bg2.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "368px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    textAlign: "center",
  },
  count: {
    fontSize: "36px",
    lineHeight: "40px",
    color: theme.palette.white,
    fontWweight: "700",
    paddingBottom: "18px",
  },
  title: {
    fontSize: "18px",
    lineHeight: "22px",
    color: theme.palette.white,
    fontWweight: "700",
    whiteSpace: "nowrap",
  },
}));

const data = [
  {
    count: "15143",
    title: "Patients",
  },
  {
    count: "536",
    title: "Cosmetic Surgery",
  },
  {
    count: "3223",
    title: "Hours Of Work",
  },
  {
    count: "818",
    title: "Dental Implants",
  },
  {
    count: "323",
    title: "Online Appointments",
  },
];

export default Result;