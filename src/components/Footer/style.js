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
    fontFamily: "Lato",
    fontSize: "18px",
    textAlign: "center",
    fontWeight: "700",
    fontStyle: "normal",
    color: theme.palette.white,
    padding: "15px 20px",
    borderRadius: "3px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.white,
      color: theme.palette.primary.main,
    },
  },
}));
