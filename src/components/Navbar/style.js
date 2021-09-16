import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey,
    height: "80px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
