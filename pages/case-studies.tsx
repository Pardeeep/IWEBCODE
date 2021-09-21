import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Main from "../components/CaseStudies/main/Main";

import LetsWork from "../components/Homepage/Others/letsWork";
import Footer from "../components/Footer/Footer";
import AboutN from "../components/navbar/aboutN";
import Cases from "../components/CaseStudies/feartued/Cases";

const CaseStudies: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <AboutN />
      <Main />
      <Cases />
      <LetsWork />
      <Footer />

    </div>
  );
};

export default CaseStudies;