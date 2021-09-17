import React from "react";
import { makeStyles } from "@mui/styles";

function Divider({ dividerWidth }) {
  const classes = useStyles();
  return (
    <div className={classes.divider} style={{ width: dividerWidth }}></div>
  );
}

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: theme.palette.primary.main,
    height: "3px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default Divider;
