import React, { useState } from "react";
import Image from "next/image";
import { BsFillCaretRightFill } from "react-icons/bs";

import styled from "styled-components";

const Case = styled.div`
  padding: 4rem 0rem;
  min-height: 100vh;
  z-index: 1;
  transition:  2s;
  @media (max-width:800px){
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  @media (max-width:800px){
    width: 100%;
  }
`;
const Description = styled.div`
  width: 50%;
  padding-left: 4.5rem;
  @media (max-width:800px){
    width: 100%;
    padding: 0;
    margin-top: 2rem;
  }
`;
const Subtitle = styled.p`
  background: #e5faf5;
  color: #9362fd;
  padding: 6px 1px;

  font-size: 0.95rem;
  width: 180px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 2rem 0;
  @media (max-width:800px){
    margin: 1rem 0;
  }
`;

const Detail = styled.p`
    width: 80%;
    color: #808080;
    font-size: 19px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 2rem;
    @media (max-width:800px){
      font-size: 14px;
      br {
        display: none
      }
    }
`;

const Button = styled.button`
  padding: 10px ;
  border: 1px solid #8447ff;
  font-size: 14px;
  background: transparent;
  color: #8447ff;
  .spacing {
    margin-left: 20px;
  }
  &:hover {
    color: #fff;
    background: #8447ff;
  }
`;

const CarouselButtons = styled.div`
  button {
    margin-left: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: none;
    background: #eee8fb;
    margin-top: 2rem;
  }
  .active {
    background: #8447ff;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  background: #fafafb;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  .margin {
      ${CarouselButtons}{
        margin: 2rem 0;
      }
  }
`;

const Cases = () => {
  const [active, setActive] = useState(1);
  const handleCase = (temp: number) => {
    setActive(temp);
  };
  return (
    <Section className="container d-flex justify-content-center align-items-center">
      <Case
        className={
          active === 1
            ? `row d-flex justify-content-center align-items-center`
            : "d-none"
        }
      >
        <ImgContainer className="col">
          <Image
            src="https://iwebcode.design/wp-content/uploads/2020/12/pcr-new.png"
            alt="IWEBCODE"
            width="650"
            height="665"
            layout="intrinsic"
          />
        </ImgContainer>
        <Description className="col">
          <Subtitle>Featured Case Studies</Subtitle>
          <Title>PCR Consultants</Title>
          <Detail>
            Designing their website was a very serious task for us! With the
            website, we wanted to depict their message clear and loud. <br />
            <br />
            The website should portray, that when it comes down to work and
            their clients, PCR consultants team wants no messing around! All
            this meant that the website’s demand was a clean, powerful theme and
            no fancy designs. We vowed to stick to that plan and control our
            urges to display our creativity with the theme!
          </Detail>
          <Button>
            Read Case Study <BsFillCaretRightFill className="spacing" />
          </Button>
          <CarouselButtons>
            <button
              className={active === 1 ? "active" : "none"}
              onClick={() => handleCase(1)}
            ></button>
            <button
              className={active === 2 ? "active" : "none"}
              onClick={() => handleCase(2)}
            ></button>
            <button
              className={active === 3 ? "active" : "none"}
              onClick={() => handleCase(3)}
            ></button>
          </CarouselButtons>
        </Description>
      </Case>

      <Case
        className={
          active === 2
            ? `row d-flex justify-content-center align-items-center margin`
            : "d-none"
        }
      >
        <ImgContainer className="col">
          <Image
            src="https://iwebcode.design/wp-content/uploads/2020/12/DreamNation.png"
            alt="IWEBCODE"
            width="660"
            height="650"
            layout="intrinsic"
          />
        </ImgContainer>
        <Description className="col">
          <Subtitle>Featured Case Studies</Subtitle>
          <Title>DreamNation</Title>
          <Detail>
            Everyone dreams of achieving a feat in life where they’re not
            dependent on anyone! But, this process isn’t as easy as it seems.{" "}
            <br />
            <br />
            At times we need a mentor to guide us through! Dream Nation helps
            thousands of people on the path to attain personal and financial
            freedom. Our task was to build a website that helps the vision of
            Dream Nation reach thousands of people who want help in achieving
            their dreams!
          </Detail>
          <Button>
            Read Case Study <BsFillCaretRightFill className="spacing" />
          </Button>
          <CarouselButtons>
            <button
              className={active === 1 ? "active" : "none"}
              onClick={() => handleCase(1)}
            ></button>
            <button
              className={active === 2 ? "active" : "none"}
              onClick={() => handleCase(2)}
            ></button>
            <button
              className={active === 3 ? "active" : "none"}
              onClick={() => handleCase(3)}
            ></button>
          </CarouselButtons>
        </Description>
      </Case>

      <Case
        className={
          active === 3
            ? `row d-flex justify-content-center align-items-center`
            : "d-none"
        }
      >
        <ImgContainer className="col">
          <Image
            src="https://iwebcode.design/wp-content/uploads/2020/12/pcr-new.png"
            alt="IWEBCODE"
            width="660"
            height="650"
            layout="intrinsic"
          />
        </ImgContainer>
        <Description className="col">
          <Subtitle>Featured Case Studies</Subtitle>
          <Title>Hexkey Infotech Pvt. Ltd.</Title>
          <Detail>
          Designing websites for different people isn’t a piece of cake. It takes a lot of effort, planning and trials to build a successful website. <br />
            <br />
            Hexkey aims at providing a total digital solution for the clients. We had to develop a website that provides necessary support to the customer right from the first step! Since this is a field that we play every day, we executed our best!
          </Detail>
          <Button>
            Read Case Study <BsFillCaretRightFill className="spacing" />
          </Button>
          <CarouselButtons>
            <button
              className={active === 1 ? "active" : "none"}
              onClick={() => handleCase(1)}
            ></button>
            <button
              className={active === 2 ? "active" : "none"}
              onClick={() => handleCase(2)}
            ></button>
            <button
              className={active === 3 ? "active" : "none"}
              onClick={() => handleCase(3)}
            ></button>
          </CarouselButtons>
        </Description>
      </Case>
    </Section>
  );
};

export default Cases;
