import React from "react";
import styled from "styled-components";
import { FaEye } from "react-icons/fa";
import Image from 'next/image'

const CardBox = styled.section`
  min-height: 800px;
  margin: 5rem 0;
`;
// box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
const Card = styled.div`
  &:hover{
    box-shadow: -52px 52px 70px -30px rgb(0 0 0 / 10%);
  }
  min-width: 265px;
  margin-bottom: 3rem;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 10px;
  .icon {
    position: relative;
    height: 100px;
    width: 120px;
    z-index: 2;
  }
  .icon::before {
    background: linear-gradient(180deg, #ebfffd 0, #efeefa 100%);
    position: absolute;
    content: "";
    right: 33%;
    top: -15%;
    height: 100%;
    width: 88px;
    z-index: -1;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transform: rotateY(-7deg);
    box-shadow: 0 0 1px transparent;
  }
  .icon-inner {
    position: relative;
    width: 62px;
    height: 62px;
    text-align: center;
    line-height: 58px;
    border-radius: 100%;
    background: #8447ff;
    left: 50px;
  }
  .image {
    position: absolute;
    top: 15px;
    left: 17px;
    font-size: 30px;
    color: white;
  }
  .violet {
    color: #8447ff;
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    background: #f6f6f7;
  }
  @media (max-width: 768px) {
    width: 200px;
    background: #f6f6f7;
  }
`;
const Title = styled.h4`
  margin-top: 25px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  text-align: center;
  word-spacing: 2px;
  font-weight: 400;
  color: #7f7f92;
  .bigger {
    font-weight: bold;
    color: #555555;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Cards = () => {
  return (
    <CardBox className="row">
      <Card className="col">
        <div className="icon">
          <div className="icon-inner">
            <Image
              layout="intrinsic"
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
            />
            <div className="image-2">
              {" "}
              <FaEye className="image" />
            </div>
          </div>
        </div>
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
      <Card className="col">
        <div className="icon">
          <div className="icon-inner">
          <Image
              layout="intrinsic"
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
            />
            <div className="image-2">
              {" "}
              <FaEye className="image" />
            </div>
          </div>
        </div>
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
      <Card className="col">
        <div className="icon">
          <div className="icon-inner">
          <Image
              layout="intrinsic"
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
            />
            <div className="image-2">
              {" "}
              <FaEye className="image" />
            </div>
          </div>
        </div>
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
      <Card className="col">
        <div className="icon">
          <div className="icon-inner">
          <Image
              layout="intrinsic"
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
            />
            <div className="image-2">
              {" "}
              <FaEye className="image" />
            </div>
          </div>
        </div>
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
      <Card className="col">
        <div className="icon">
          <div className="icon-inner">
          <Image
              layout="intrinsic"
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
            />
            <div className="image-2">
              {" "}
              <FaEye className="image" />
            </div>
          </div>
        </div>
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
      <Card className="col">
        <div className="icon">
          <div className="icon-inner">
          <Image
              layout="intrinsic"
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
            />
            <div className="image-2">
              {" "}
              <FaEye className="image" />
            </div>
          </div>
        </div>
        <Title>Quality Assurance</Title>
        <Description>
          We Strive Our Best To Provide Quality Assurance Services Ensuring That
          Final Product Meets Organization???s Standards Plus The Client???s
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
