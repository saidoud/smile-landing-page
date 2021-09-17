import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "751px",
  },
  image: {
    backgroundImage: "url(/assets/passion.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  content: {
    backgroundColor: theme.palette.backgroundLight,
    padding: "30px 100px",
  },
}));
