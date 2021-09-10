import React from "react";
import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import Head from "next/head";
import Header from "../components/Homepage/header/header";
import Services from "../components/Homepage/services/services";
import Cases from "../components/Homepage/CaseStudies/cases"
import About from "../components/Homepage/aboutHomepage/about";
import Projects from "../components/Homepage/Projects/projects";
import Testimonial from "../components/Homepage/Others/testimonial";
import Clients from "../components/Homepage/Others/clients";
import Present from "../components/Homepage/Others/present";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/navbar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
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
      <Header />
      <Services />
      <Cases />
      <About />
      <Projects />
      <Testimonial />
      <Clients />
      <Present />
      <Footer />

    </div>
  );
};

export default Home;
