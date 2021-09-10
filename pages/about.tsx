import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar/navbar";
import Head from "next/head";
import Main from "../components/AboutPage/main/main";
import Who from "../components/AboutPage/whoWeAre/who";
import Values from "../components/AboutPage/Values/values";
import Process from "../components/AboutPage/process/process";
import LetsWork from "../components/Homepage/Others/letsWork";
import Footer from "../components/Footer/Footer";
import Navbar2 from "../components/navbar/navbar2";

const About: NextPage = () => {
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

      <Navbar />
      <Main />
      <Who />
      <Values />
      <Process />
      <LetsWork />
      <Footer />

    </div>
  );
};

export default About;
