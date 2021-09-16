import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";
import theme from "../src/theme";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Navbar />
        <Banner />
      </ThemeProvider>
    </>
  );
}
