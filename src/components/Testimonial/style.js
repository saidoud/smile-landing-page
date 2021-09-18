import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.backgroundLight,
    paddingTop: "50px",
  },
  appointment: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "292px",
  },
  title: {
    font: "normal 700 28px/34px Lato",
    color: theme.palette.white,
    marginBottom: "30px",
  },
  button: {
    backgroundColor: theme.palette.white,
    font: "normal 700 18px/34px Lato",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: theme.palette.black,
      color: theme.palette.white,
    },
    marginTop: "30px",
  },
  contactIcon: {
    color: theme.palette.white,
    marginRight: "15px",
  },
  contactLink: {
    font: "normal 400 16px/24px Lato",
    color: theme.palette.white,
    textDecoration: "none",
  },
}));
