import type { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

import AboutN from "../components/navbar/aboutN";
import Main from "../components/ContactUs/Main/main";
import Form from "../components/ContactUs/Form/form";
import Where from "../components/ContactUs/whereWeAre/where";
import LetsWork from "../components/Homepage/Others/letsWork";
import Footer from "../components/Footer/Footer";

const Contact:NextPage = () => {
  return (
    <section className="" style={{ background: "#F7F7FF" }}>
      <Head>
        <title>Contact Us - IWEBCODE</title>
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
      <Form />
      <Where />
      <LetsWork />
      <Footer />

    </section>
  );
};

export default Contact;
