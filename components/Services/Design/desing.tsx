import React from "react";
import styled from "styled-components";
import { Cards } from "../Cards/Cards";

const Design = () => {
  const Card = [
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Logo & Branding",
      description:
        "Your logo and brand speaks a lot about you. They define your identity and tell everyone who you are as a company. We, at IWEBCODE, spend lots of time to work with fonts, colors, images, and graphics for identifying your business identity. Your business repute becomes more trusted and reputed within your niche",
      icon: "plane",
      iconC: "c1",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Website Design",
      description:
        "Website Designing Company in Mohali are best in providing website designing services to grow your business exponentially. These include WordPress development, Responsive web design, E-Commerce, Graphic design, Website hosting, SEO-backed web design, and lot more",
      icon: "code",
      iconC: "c2",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Mobile App Design",
      description:
        "We provide best mobile app design services by creating an appealing and catchy visual design and engaging UX helping you to convert more prospects to regular clients. App Development Company in Mohali excel in creating cohesive plans for your application architecture making application scalable for future amendments",
      icon: "mobile",
      iconC: "c3",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Graphic/Print Design",
      description:
        "IWEBCODE is offering top-notch graphic and print design services to valuable customers including logo design, brochures and catalog design, business cards printing, Flyer design services, roll-up stand and banner design services, and lot more.",
      icon: "print",
      iconC: "c4",
    },
    {
      src1: "https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png",
      alt: "innerImage",
      title: "Video Production",
      description:
        "IWEBCODE offers detailed video production services ensuring perfectly developed website for your business. We provide detailed quote for pre-production costs, video creation, editing, graphics, animations, post-production costs, intro, and outro.",
      icon: "print",
      iconC: "c5",
    },
  ];

  const Section = styled.section`
    margin: 3rem auto;
    max-width: 1170px;
    .title{
        width: fit-content;
        padding: 5px 15px;
        color: #844ff7;
        margin-left: 0px;
        background: #EFFCFF;
        margin-bottom: 1.5rem;
    }
    .heading{
        font-size: 55px;
        font-weight: 700;
        padding: 0;
        margin: 0;
    }
  `
  return (
    <Section className="container-fluid">
        <div className="row">
        <div className="row title">Services</div>
        <h1 className="heading">Design</h1>
      </div>
      <Cards cards={Card} />
    </Section>
  );
};

export default Design;
