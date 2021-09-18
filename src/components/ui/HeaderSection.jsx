import React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import Divider from "../ui/Divider";

function HeaderSection({ title, subTitle, ...otherProps }) {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="sm" style={{ ...otherProps }}>
      <em className={classes.subTitle}>{subTitle}</em>
      <p className={classes.title}>{title}</p>
      <Divider dividerWidth="65px" />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",

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
}));

export default HeaderSection;
