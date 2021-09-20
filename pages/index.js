import { CssBaseline } from "@mui/material";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import Banner from "../src/components/Banner";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";
import Service from "../src/components/Service";
import Passion from "../src/components/Passion";
import Experience from "../src/components/Experience";
import theme from "../src/theme";
import Result from "../src/components/Result";
import Testimonial from "../src/components/Testimonial";
import Equipment from "../src/components/Equipement";
import Update from "../src/components/Update";
import Client from "../src/components/Client";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smile Care</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content="Dentiste Landing Page" />
        <meta name="keywords" content="Dentiste , Smile House" />
        <meta name="author" content="Said Ouddou" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Navbar />
        <Banner />
        <Service />
        <Passion />
        <Experience />
        <Result />
        <Testimonial />
        <Equipment />
        <Update />
        <Client />
        <Footer />
      </ThemeProvider>
    </>
  );
}
