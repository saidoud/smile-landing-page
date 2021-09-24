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
import Client from "../src/components/Client/Client";
import "aos/dist/aos.css";
import { useState } from "react";
import SideBar from "../src/components/Header/SideBar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>Smile Care</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header onToggle={onToggle} />
        <SideBar isOpen={isOpen} onToggle={onToggle} />
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
