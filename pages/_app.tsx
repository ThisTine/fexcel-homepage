import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../Components/Nav'
import Footer from '../Components/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Aos from 'aos'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
  <Head>
    <title>Fexcel - for excellent Excel experiences.</title>
  </Head>
  <NavBar/>
  <Component {...pageProps} />
  <Footer/>
  </>)
}

export default MyApp
