import React from "react";
import styled from "styled-components";

const CardBox = styled.section`
    display:flex;
    justify-content: space-evenly;
    width: 100%;
    padding: 0 5rem;
    flex-wrap: wrap;
`;


// box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
const Card = styled.div`
  width: 280px;
  min-height: 500px;
  margin: 2rem 0;
  padding: 1rem .96rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  .icon {
    width: 80px;
    height: 80px;
    background: #8447ff;
  }
  .violet {
    color: #8447ff;
    text-decoration: underline;
    margin-top: 15px;
  }
`;
const Title = styled.h4`
  margin-top: 30px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.7;
  text-align: center;
  font-weight: 400;
  color: #7f7f92;
  .bigger {
    font-weight: bold;
    color: #555555;
  }
`;

export const Cards = () => {
  return (
    <CardBox>
      <Card>
        <p className="icon"></p>
        <Title>Design</Title>
        <Description>
          Our Creative Design Services Assure Best Quality Standards And Stand
          Out Of The Crowd.{" "}
          <span className="bigger"> Website Designing Company In Mohali </span>
          Provide Cohesive Designs Across All Platforms Including Logo And
          Branding, Website Design, Mobile App Design, Graphic Design, And Video
          Production With Editing
        </Description>
        <a href="#" className="violet">
          Learn More
        </a>
      </Card>
      <Card>
        <p className="icon"></p>
        <Title>Development</Title>
        <Description>
          Your Web Platform Is Home Of Our Business Whatever Environment Does It
          Use. It Is The Place Where You Get Leads And Convert Them
          Successfully. Your Success Is Our Success. Offers Web Development
          Services Include WordPress, Shopify, Hubspot, WIX, And Much Mor
        </Description>
        <a href="#" className="violet">
          Learn More
        </a>
      </Card>
      <Card>
        <p className="icon"></p>
        <Title>Digital Marketing</Title>
        <Description>
          We Are Artefact- A Complete And Over Solution To Grow Your Business
          Made Simple.{" "}
          <span className="bigger">Digital Marketing Company In Mohali </span>{" "}
          Let You Tackle All Your Business Issues With Our Comprehensive
          Solutions Where Content Is The King To Boost Your Sales Taking You At
          The Top Of The List
        </Description>
        <a href="#" className="violet">
          Learn More
        </a>
      </Card>
      <Card>
        <p className="icon"></p>
        <Title>Technology</Title>
        <Description>
          Our Awesome Technical Tools I.E. Hosting And Big Data Analysis Have
          Minimized Optimization For Coders And Developers But Maximized
          Optimizing For Users. We Have Subtracted The Obvious And Added The
          Meaningful
        </Description>
        <a href="#" className="violet">
          Learn More
        </a>
      </Card>
      <Card>
        <p className="icon"></p>
        <Title>Content Strategy</Title>
        <Description>
          We Follow High And Best Level Planning And Management Approached For
          Creating Unique Content, Which Defines Business Goals At Its Best.
          This Assures Right Content For Right Audiences Under Right Niches
        </Description>
        <a href="#" className="violet">
          Learn More
        </a>
      </Card>
      <Card>
        <p className="icon"></p>
        <Title>Quality Assurance</Title>
        <Description>
          We Strive Our Best To Provide Quality Assurance Services Ensuring That
          Final Product Meets Organization’s Standards Plus The Client’s
          Requirements. Our Testing, Development, Implementation, And Deployment
          Departments Are Working 24/7 For Ensuring The Best Of Best.
        </Description>
        <a href="#" className="violet">
          Learn More
        </a>
      </Card>
    </CardBox>
  );
};
