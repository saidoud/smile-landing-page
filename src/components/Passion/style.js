import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "751px",
  },
  image: {
    backgroundImage: "url(/assets/passion.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  content: {
    backgroundColor: theme.palette.backgroundLight,
    padding: "30px 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 50px",
    },
  },
}));
