import React from "react";
import styled from "styled-components";
import { Cards } from "../Cards/Cards";

const Development = () => {
  const Card = [
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "WordPress development",
      description:
        "Content management through WordPress has been made easier by IWEBCODE, A WordPress Website Development Company in Mohali for the customers where digital content can be created and modified perfectly",
      icon: "wordpress",
      iconC: "c1",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Mobile App Development",
      description:
        "We are best at developing professionally looking mobile applications. Our developed applications are all search engine plus user friendly",
      icon: "appStore",
      iconC: "c2",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "React Development",
      description:
        "We have highly skilled and experienced react team. Web Development Company in Mohali cross-functional react team includes 300+ skilled developers having 400+ project delivered",
      icon: "react",
      iconC: "c1",
    },

    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Shopify Development",
      description:
        "We offer vast, robust, and scalable Content Management System and ecommerce services. We are a right choice for you for Shopify websites, which are highly durable and customizable",
      icon: "openCart",
      iconC: "c3",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Hubspot Development",
      description:
        "Web Development Company in Mohali are a dedicated team of passionate Hubspot CMS developers plus marketers who work with great dedication and help customers to develop beautiful and catchy websites providing highly convertible landing pages bringing great user experiences to the next levels.",
      icon: "hubspot",
      iconC: "c1",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Wix / SquareSpace",
      description:
        "We provide both WIX and Square Space development services for our valuable clients letting them to move from WIX to squarespace even. WordPress Website Development Company in Mohali develop stunning websites with premium features for customers providing great user experience. We help you to sell services online using SquareSpace including products, online bookings, subscriptions, affiliate marketing products, signups, and gift cards to serve your customers at the best.",
      icon: "wix",
      iconC: "c1",
    },
  ];

  const Section = styled.section`
    margin: 3rem auto;
    padding-top: 2rem;
    background: #FAFAFB;
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
    <Section className="container-fluid d-flex flex-column align-items-center ">
      <div className="row justify-content-start align-items-start w-100" style={{maxWidth: "1170px"}} >
        <div className="row title">Services</div>
        <h1 className="heading">Development</h1>
      </div>
      <Cards cards={Card} />
    </Section>
  );
};

export default Development;
