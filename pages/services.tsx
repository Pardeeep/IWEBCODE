import React from "react";
import Head from "next/head";

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
import ServiceN from "../components/navbar/serviceN";

const Links = styled.div`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
  padding: 0 !important;
  div{
    border-bottom: 1px solid #e5e5e5;
    max-width: 1300px;
  }
  ul {
    margin: 0;
  }
  li {
    color: #A4A4B1;
    outline: none;
    list-style: none;
    padding: 30px;
    margin: 0 5px;
    height: 100%;
    cursor: pointer;
    position: relative;
    &::after {
      content: "";
      width: 0;
      height: 2px;
      bottom: 0;
      position: absolute;
      left: auto;
      right: 0;
      z-index: -1;
      -webkit-transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
      -o-transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
      transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
      background: #844ff7;
    }
    :hover {
      color: #844ff7;
      &::after {
        width: 100%;
      }
    }
  }
  @media( max-width: 968px){
    li{
      padding: 30px 20px;
    }
  }
  @media( max-width: 768px){
    li{
      padding: 20px 5px;
    }
  }
  @media( max-width: 568px){
    li {
      padding: 10px 5px;
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
      <ServiceN />
      <Main />
      <Links className="container-fluid d-flex justify-content-center">
        <div className="row justify-content-center align-items-center w-100">
          <ul className="col d-flex flex-wrap justify-content-center">
            <li>
              <Link href="services/#design">Design</Link>
            </li>
            <li>
              <Link href="services/#development">Development</Link>
            </li>
            <li>
              <Link href="services/#online">Online Marketing</Link>
            </li>
            <li>
              <Link href="services/#technology">Technology</Link>
            </li>
            <li>
              <Link href="services/#content">Content Strategy</Link>
            </li>
          </ul>
        </div>
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
