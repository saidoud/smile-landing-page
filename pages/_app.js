import Head from "next/head";

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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
