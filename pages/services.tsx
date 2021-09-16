import React from "react";
import Head from "next/head";

import AboutN from "../components/navbar/aboutN";
import Main from "../components/Services/Main/main";
import Link from "next/link";
import styled from "styled-components";
import Design from "../components/Services/Design/desing";
import Footer from "../components/Footer/Footer";
import Development from "../components/Services/development/development";
import Online from "../components/Services/OnlineMarketing/online";
import Technology from "../components/Services/Technology/technology";
import Content from "../components/Services/ContentStrategy/content";
import LetsWork from "../components/Homepage/Others/letsWork";

const Links = styled.div`
  li {
    list-style: none;
    padding: 20px 30px;
    transition: 1s;
    cursor: pointer;
    &:hover {
      border-bottom: 3px solid #844ff7;
      color: #844ff7;
    }
  }
`;

const Services = () => {
  return (
    <section>
      <Head>
        <title>
          Our Services - Design & Development, Online Marketing, ...
        </title>
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
      <Links className="container-fluid">
        <div className="row justify-content-center">
          <ul className="col d-flex justify-content-center">
            <li>
              <Link href="/#design">Design</Link>
            </li>
            <li>
              <Link href="/#development">Development</Link>
            </li>
            <li>
              <Link href="#">Online Marketing</Link>
            </li>
            <li>
              <Link href="#">Technology</Link>
            </li>
            <li>
              <Link href="#">Content Strategy</Link>
            </li>
          </ul>
        </div>
        <hr />
      </Links>
      <Design />
      <Development />
      <Online />
      <Technology />
      <Content />
      <LetsWork />
      <Footer />
    </section>
  );
};

export default Services;
