import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  secondFooter: {
    height: "70px",
    backgroundColor: theme.palette.secondary.black,
  },
  mainFooter: {
    padding: "60px 0",
    backgroundColor: theme.palette.backgroundLight,
  },
  footerHead: {
    fontFamily: "Lato",
    fontSize: "18px",
    lineHeight: "22px",
    color: theme.palette.secondary.black,
    fontWeight: "700",
    marginBottom: "1em",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    minHeight: "70px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "5px 0px",
    },
  },
  copyright: {
    fontSize: "16px",
    lineHeight: "24px",
    color: theme.palette.light,
    fontWeight: "400",
    letterSpacing: "0.2px",
    flexGrow: 1,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    border: "1px solid #26ade4",
    font: "normal 700 18px/20px Poppins",
    textAlign: "center",
    color: theme.palette.white,
    padding: "13px 25px",
    borderRadius: "3px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.white,
      color: theme.palette.primary.main,
    },
  },
  paragraph: {
    font: "normal 400 16px/24px Poppins",
  },
  link: {
    font: "normal 700 16px/24px Poppins",
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));
