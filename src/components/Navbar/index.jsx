import React from "react";
import { useStyles } from "./style";

function index() {
  const classes = useStyles();
  return <div className={classes.root}></div>;
}

export default index;
