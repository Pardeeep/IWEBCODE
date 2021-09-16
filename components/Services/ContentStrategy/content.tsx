import React from "react";
import styled from "styled-components";
import { Cards } from "../Cards/Cards";

const Content = () => {
  const Card = [
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Planning",
      description:
        "Website Designing Company in Mohali plan the content and prepare the list of activities to be performed inclosing keywords usage, keyword density issues, promotions, hyperlinks, anchor texts, and related factors",
      icon: "dice",
      iconC: "c1",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Development",
      description:
        "Prepare and present entire website content after its technical development. This also includes Meta tags and SEO related content because the same activities also take place during this phase",
      icon: "hammer",
      iconC: "c2",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Management",
      description:
        "Finally, we manage the content and check if there are any additions or revisions needed. We check the uniqueness and readability ratio of the same and properly manage the content as per Google’s guidelines.",
      icon: "folder",
      iconC: "c3",
    },
    
  ];

  const Section = styled.section`
    margin: 0rem auto;
    padding-top: 2rem;
    background: #fafafb;
    .title {
      width: fit-content;
      padding: 5px 15px;
      color: #844ff7;
      margin-left: 0px;
      background: #EAF7FB;
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
    <Section className="container-fluid d-flex align-items-center flex-column ">
      <div className="row w-100" style={{maxWidth: "1170px"}}>
        <div className="row title">Services</div>
        <h1 className="heading">Content Strategy</h1>
      </div>
      <Cards cards={Card} />
    </Section>
  );
};

export default Content;
