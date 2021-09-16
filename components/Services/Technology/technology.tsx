import React from "react";
import styled from "styled-components";
import { Cards } from "../Cards/Cards";

const Technology = () => {
  const Card = [
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Hosting",
      description:
        "Our hosting plans are very cost-effective and the solutions are developed for speed, trust, scalability, security, efficiency, and reliability. You can choose any of the best hosting plans available from us",
      icon: "server",
      iconC: "c1",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Big Data Analysis",
      description:
        "Web Design and Development Company in Mohali provide the best data analysis services where we start with questions, gather data needed, explore the data, develop proper data insights, and share final results with our valuable clients.",
      icon: "database",
      iconC: "c3",
    },
  ];

  const Section = styled.section`
    margin: 0rem auto;
    max-width: 1170px;
    .title {
      width: fit-content;
      padding: 5px 15px;
      color: #844ff7;
      margin-left: 0px;
      background: #effcff;
      margin-bottom: 1.5rem;
    }
    .heading {
      font-size: 55px;
      font-weight: 700;
      padding: 0;
      margin: 0;
    }
  `;
  return (
    <Section className="container-fluid">
      <div className="row">
        <div className="row title">Services</div>
        <h1 className="heading">Technology</h1>
      </div>
      <Cards cards={Card} />
    </Section>
  );
};

export default Technology;
