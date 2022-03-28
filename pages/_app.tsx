import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../Components/Nav";
import Footer from "../Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import Head from "next/head";
import DataSheetContextProvider from "../contexts/DatasheetContextProvider";
import NextNProgress from "nextjs-progressbar";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    <Script
      id="gtm-link-script" strategy="afterInteractive"
      src={'https://www.googletagmanager.com/gtag/js?id=G-KD2NB1Y6DL'}
      />
      <Script 
      id="gtm-script" strategy="afterInteractive">
         {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
        gtag('config', 'G-KD2NB1Y6DL');`}
      </Script>
      <Head>
        <title>Fexcel - for excellent Excel experiences.</title>
      </Head>
      
      
      <NextNProgress />
      <NavBar />
      <DataSheetContextProvider>
      <Component {...pageProps} />
      </DataSheetContextProvider>
      <Footer />
    </>
  );
}

export default MyApp;
