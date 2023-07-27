
import Head from "next/head";
import { Footer } from "./Footer";
import  Navbar  from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>BEM | Stikom Banyuwangi</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="shortcut icon" href="/dist/img/logo/logos.png" /> */}
        <link rel="icon" href="/home/image/logo-ukm/bem.png" />
      </Head>
      <div id="app">
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </div>
  );
}