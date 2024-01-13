import 'bootstrap/dist/css/bootstrap.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'animate.css'
import Layout from '../components/layout';
import '../styles/stylesheet.css';
import '../styles/globals.css';
import Head from 'next/head'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind('[data-fancybox]', {
  //
});

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <>
    <Head>
    <title>NUSRL, Ranchi, National University of Study and Research in Law</title>
    </Head>
    <Layout><Component {...pageProps} /> </Layout> 
    </>
  )
}