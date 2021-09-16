import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.white,
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
  },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    listStyle: "none",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navLink: {
    padding: "0 10px",
    "& a": {
      textDecoration: "none",
      fontSize: "16px",
      color: theme.palette.secondary.main,
      fontFamily: "Poppins",
    },
  },
}));
