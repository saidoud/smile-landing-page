import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {

      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        sizeSmall: {
          padding: '6px 16px'
        },
        sizeMedium: {
          padding: '8px 20px'
        },
        sizeLarge: {
          padding: '11px 24px'
        },
        textSizeSmall: {
          padding: '7px 12px'
        },
        textSizeMedium: {
          padding: '9px 16px'
        },
        textSizeLarge: {
          padding: '12px 16px'
        }
      }
    },

  },
  typography: {
    //fontFamily: ["Lato"].join(","),
    fontFamily: "'Lato', sans-serif"
  },
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
