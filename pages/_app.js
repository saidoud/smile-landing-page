import Head from "next/head";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
