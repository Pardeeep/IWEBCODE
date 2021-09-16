import React from "react";
import styled from "styled-components";
import { Cards } from "../Cards/Cards";

const Online = () => {
  const Card = [
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "SEO",
      description:
        "Content is the King and SEO is incomplete without it. SEO Company in Mohali provide lead generations services white hat SEO methods, on-page, off-page SEO, backlinks, kink juices, guest posting, and lot more services for our customers at reasonable costs.",
      icon: "search",
      iconC: "c1",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Pay-Per-Click",
      description:
        "We, at IWEBCODE, help our clients to reach their customers through paid advertising. This also includes product selling, online business boosting, and much more.",
      icon: "mousePointer",
      iconC: "c2",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Email Marketing",
      description:
        "Email Marketing services give brief introduction to the business and we assist our valuable customers to introduce their businesses, products, and services through email advertising. Digital Marketing Company in Chandigarh also helps them in generating lots of leads and prospects.",
      icon: "mailBulk",
      iconC: "c3",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Display Marketing",
      description:
        "Display marketing or marketing services are all about ads, which are placed to get good and positive results. Digital Marketing Company in Chandigarh should not waste your time and valuable resources on display advertisement campaigns especially those which are least performing. You better should partner with us to achieve maximum ROI.",
      icon: "ad",
      iconC: "c4",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Social Media Marketing",
      description:
        "We offer vast, robust, and scalable Content Management System and ecommerce servicesWEBCODE offers great SMM services to the clients. Trust management, social media integrations, producing top-rated media content, and increasing social visibility are some of our prime goals.",
      icon: "facebook",
      iconC: "c5",
    },
  ];

  const Section = styled.section`
    margin: 3rem auto;
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
    <Section className="container-fluid" id="online">
      <div className="row  px-5">
        <div className="row title">Services</div>
        <h1 className="heading">Online Marketing</h1>
      </div>
      <Cards cards={Card} />
    </Section>
  );
};

export default Online;
