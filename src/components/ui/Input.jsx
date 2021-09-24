import React from "react";
import { makeStyles } from "@mui/styles";

function Input({ name, size, placeholder, type, style }) {
  const classes = useStyles();
  return (
    <input
      className={classes.root}
      name={name}
      type={type}
      placeholder={placeholder}
      size={size}
      style={style}
    />
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #e6e6e6",
    borderRadius: "3px",
    color: "#425153",
    padding: "10px",
    width: "100%",

    "&:focus": {
      outlineColor: theme.palette.primary.main,
    },
  },
}));
export default Input;
