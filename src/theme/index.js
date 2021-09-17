import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#26ade4",
    },
    secondary: {
      main: "#3b3b3f",
      black: "#282b33",
    },
    backgroundLight: "#F5F7FA",
    light: "#d8d8d9",
    grey: "rgba(245, 247, 250, 1)",
    black: "#000",
    white: "#fff",
  },
});

export default theme;
