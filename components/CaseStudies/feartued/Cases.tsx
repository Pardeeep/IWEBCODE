import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { BsFillCaretRightFill } from "react-icons/bs";
import Link from "next/link";

const Case = styled.div`
  max-width: 1170px;
  padding: 4rem 0rem;
  z-index: 1;
  cursor: pointer;
  transition: 2s;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-right: 4rem;
  }
`;

const ImgContainer = styled.div`
  width: 50%;
  @media (max-width: 968px) {
    width: 100%;
  }
`;
const Description = styled.div`
  padding-left: 3rem;
  .sales {
    padding-top: 20px;
    h1 {
      color: #844ff7;
      width: 100px;
      margin-right: 40px;
    }
    p {
      width: 100%;
    }
  }
  @media (max-width: 968px) {
    width: 100%;
    padding: 0 1rem;
    margin-top: 2rem;
    margin: 0rem;
  }
  @media (max-width: 768px) {
    margin: 0 1.5rem;
  }
`;
const Subtitle = styled.p`
  background: #e5faf5;
  color: #844ff7;
  padding: 6px 1px;
  font-size: 0.95rem;
  width: 180px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 2rem 0;
  font-size: 60px;
  font-weight: 700;
  &:hover {
    color: #844ff7;
  }
  @media (max-width: 800px) {
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
  @media (max-width: 800px) {
    width: 90%;
    font-size: 14px;
    br {
      display: none;
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid #8447ff;
  font-size: 16px;
  font-weight: 500;
  background: transparent;
  color: #8447ff;
  .spacing {
    margin-left: 10px;
  }
  &:focus{
    outline: none;
  }
  &:hover {
    color: #fff;
    background: #8447ff;
  }
`;

const Cases = () => {
  return (
    <section className="container-fluid d-flex flex-column align-items-center justify-content-center">
      <Case className="row d-flex justify-content-center align-items-center">
        <Link href="/case-studies/pcr-consultants" passHref>
          <ImgContainer className="col">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/12/pcr-new.png"
              alt="IWEBCODE"
              width="650"
              height="690"
              layout="intrinsic"
            />
          </ImgContainer>
        </Link>
        <Description className="col">
          <Subtitle>Featured Case Studies</Subtitle>
          <Link href="/case-studies/pcr-consultants" passHref>
            <Title>Logo & Web Desing For PCR Consultants</Title>
          </Link>
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
          <Link href="/case-studies/pcr-consultants" passHref>
            <Button>
              Read Case Study <BsFillCaretRightFill className="spacing" />
            </Button>
          </Link>
          <div className="sales d-flex">
            <div>
              <h1>45%</h1>
              <Detail>ROI increase</Detail>
            </div>
            <div>
              <h1>19k</h1>
              <Detail>Monthaly website visits</Detail>
            </div>
          </div>
        </Description>
      </Case>
      <Case className="row d-flex justify-content-center align-items-center">
        <Description className="col">
          <Subtitle>Featured Case Studies</Subtitle>
          <Link href="/case-studies/dream-nation" passHref>
            <Title>DreamNation</Title>
          </Link>
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
          <Link href="/case-studies/dream-nation" passHref>
            <Button>
              Read Case Study <BsFillCaretRightFill className="spacing" />
            </Button>
          </Link>
          <div className="sales d-flex">
            <div>
              <h1>45%</h1>
              <Detail>ROI increase</Detail>
            </div>
            <div>
              <h1>19k</h1>
              <Detail>Monthaly website visits</Detail>
            </div>
          </div>
        </Description>
        <Link href="/case-studies/dream-nation" passHref>
          <ImgContainer className="col">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/12/DreamNation-661x661.png"
              alt="IWEBCODE"
              width="650"
              height="690"
              layout="intrinsic"
            />
          </ImgContainer>
        </Link>
      </Case>

      <Case className="row d-flex justify-content-center align-items-center">
        <Link href="/case-studies/hexkey-infotech-pvt-ltd" passHref>
          <ImgContainer className="col">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/12/hexkey-new-661x661.png"
              alt="IWEBCODE"
              width="650"
              height="690"
              layout="intrinsic"
            />
          </ImgContainer>
        </Link>
        <Description className="col">
          <Subtitle>Featured Case Studies</Subtitle>
          <Link href="/case-studies/hexkey-infotech-pvt-ltd" passHref>
            <Title>Hexkey Infotech Pvt. Ltd.</Title>
          </Link>
          <Detail>
            Designing websites for different people isn’t a piece of cake. It
            takes a lot of effort, planning and trials to build a successful
            website.
            <br />
            <br />
            Hexkey aims at providing a total digital solution for the clients.
            We had to develop a website that provides necessary support to the
            customer right from the first step! Since this is a field that we
            play every day, we executed our best!
          </Detail>
          <Link href="/case-studies/hexkey-infotech-pvt-ltd" passHref>
            <Button>
              Read Case Study <BsFillCaretRightFill className="spacing" />
            </Button>
          </Link>
          <div className="sales d-flex">
            <div>
              <h1>7%</h1>
              <Detail>ROI increase</Detail>
            </div>
            <div>
              <h1>20k</h1>
              <Detail>Monthaly website visits</Detail>
            </div>
          </div>
        </Description>
      </Case>
    </section>
  );
};

export default Cases;
