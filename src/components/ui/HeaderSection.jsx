import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";

function HeaderSection({ title, subTitle }) {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm">
      <em className={classes.subTitle}>{subTitle}</em>
      <p className={classes.title}>{title}</p>
      <div className={classes.divider}></div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    marginTop: "50px",
    alignItems: "center",
  },
  subTitle: {
    color: theme.palette.secondary.main,
    fontSize: "16px",
    fontStyle: "italic",
    lineHeight: "24px",
    fontWeight: "500",
  },
  title: {
    color: theme.palette.secondary.black,
    fontSize: "28px",
    lineHeight: "34px",
    fontWeight: "700",
    marginTop: "10px",
    marginBottom: "22px",
  },
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: "3px",
    width: "65px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default HeaderSection;
