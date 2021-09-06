import Image from "next/image";
import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";

import styled from "styled-components";

const Main = styled.section`
  min-height: 100vh;
  padding: 0 4rem;
  margin: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Detail = styled.div`
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Form = styled.div`
  @media(max-width:800px){
    width: 70%;
    margin: 0;
  }
  margin-left: 9.5rem;
  padding: 1rem 3rem;
  padding-bottom: 2rem;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  flex-direction column;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  .heading {
      font-size: 35px;
      word-spacing: 1px;
      margin-bottom: 16px;
  }
  .call {
      margin-top: 1.6rem;
      font-size: 14px;
      color: gray;
  }
  .icon{
      color: black;
      font-size: 22px;
  }

  .call span{
      padding-left: 30px;
  }
`;
const Title = styled.p`
  background: #e5faf5;
  color: #9362fd;
  padding: 5px;
  width: 90px;
  text-align: center;
`;

const Heading = styled.h1`
  margin: 1.6rem 0;
  line-height: 60px;
  font-size: 42px;
  font-weight: bold;
  @media (max-width: 800px) {
    margin: 1rem 0;
  }
`;

const Description = styled.div`
  color: #8b8b9c;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    font-size: 14px;
    br {
      display: none;
    }
  }
`;

const Button = styled.button`
  padding: 16px;
  border: 1px solid #8447ff;
  font-size: 16px;
  background: transparent;
  margin: 1rem 0;
  color: #8447ff;
  .spacing {
    margin-left: 20px;
  }
  &:hover {
    color: #fff;
    background: #8447ff;
  }
`;

const A = styled.a`
  font-size: 22px;
  font-weight: 700;
  color: #000248;
  text-decoration: none;
  &:hover {
    color: #8447ff;
  }
`;

const StyleInput = styled.form`
  position: relative;
  height: 3rem;
  margin: 0.8rem 0;
  .input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: 3px solid #e5e5e5;
    color: black;
    outline: none;
    padding: 1.25rem 0;
    background: none;

    &:focus {
      border-color: #844ff7;
    }
  }
  .label {
    position: absolute;
    left: 0;
    top: 0.8rem;
    color: gray;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: #fff;
  }
  .input:focus ~ .label,
  .input:not(:placeholder-shown).input:not(:focus) ~ .label {
    top: -0.5rem;
    font-size: 0.9rem;
    color: #844ff7;
  }
`;

const Expert = styled.div`
  min-height: 90vh;
  padding: 0 4rem;
  background: #fafafb;
  display: flex;
  justify-content: space-evenly:
  align-items: center;
  @media (max-width: 800px){
    flex-direction: column;
    padding: 0 10px;
  }
  .down{
    position: relative;
    top: 80px;
  }
  .details{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .title{
      max-width: 150px;
      font-size: 14px;
      padding: 8px 0px !important;
      margin: 0;
  }
  .heading{
      max-width: 500px;
      font-size:50px;
      margin: 2rem 0;
  }

  .description {
    max-width: 400px;
  }

  .button {
      width: 150px;
      margin: 0;
  }
  .projects{
    width: 50%;
    display: flex;
      justify-content: center;
      align-items: center;
      @media(max-width: 800px){
        padding: 4rem;
        width: 100%;
      }
  }

`;

const Box = styled.div`
  background: #fff;
  height: 280px;
  width: 250px;
  margin-left: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  .Img {
    padding: 10px;
    height: 50px;
    display: grid;
    place-items: center;
    background: #e5faff;
    border-radius: 50%;
  }
  .counting {
    color: #000248;
    font-size: 35px;
    margin: 15px;
  }
  .text {
    color: #9a9aa9;
    font-size: 18px;
  }
`;

const Section = styled.section`
  margin: 6rem 0;
`
const About = () => {
  return (
    <Section className="container-fluid">
      <Main className="row">
        <Detail className="col">
          <Title>About Us</Title>
          <Heading>A Perfect Blend Of Technology And Innovation</Heading>
          <Description>
            <p className="subtitle-2 mb--50 mb_lg--20 mb_md--20 mb_sm--15 move-up wow animated">
              We, at IWEBCODE, are here to serve you at our best.{" "}
              <b>Web Development Company in Mohali</b> built a platform where
              you can get attract more leads and get tools from us for better
              management.
              <br />
              <br /> We are confident enough to provide you with the best
              services as per your requirements with proven results.{" "}
              <b>Web Design and Development Company in Mohali</b> offer services
              include UI/UX design, website and app development services, and
              lot more. The websites are developed using latest technologies and
              all of them adhere to the standards and technical specifications
              for better outcomes. <b>Website Designing Company in Mohali</b>{" "}
              provide our clients with the best and amazing web solutions, which
              are clear, perfect, and effective. Our websites are designed with
              hard work, passion, honesty, crisp, and lots of love.
            </p>
          </Description>
        </Detail>
        <Form className="col">
          <Heading className="heading">Get A Free Quote Now</Heading>
          <StyleInput className="form">
            <input
              type="text"
              id="text"
              className="input"
              autoComplete="off"
              placeholder=" "
            />
            <label className="label">Name</label>
          </StyleInput>
          <StyleInput className="form">
            <input
              type="text"
              id="email"
              className="input"
              autoComplete="off"
              placeholder=" "
            />
            <label className="label">Email</label>
          </StyleInput>
          <StyleInput className="form">
            <input
              type="text"
              id="email"
              className="input"
              autoComplete="off"
              placeholder=" "
            />
            <label className="label">Company</label>
          </StyleInput>
          <StyleInput className="form">
            <input
              type="number"
              id="email"
              className="input"
              autoComplete="off"
              placeholder=" "
            />
            <label className="label">Phone</label>
          </StyleInput>
          <Button>
            Get Pricing Now <BsFillCaretRightFill className="spacing" />
          </Button>
          <div className="call">
            Or call us now
            <span>
              <FaPhoneAlt className="icon" />{" "}
              <A href="tel: +9175032750322">(+91) 75032 50322</A>
            </span>
          </div>
        </Form>
      </Main>
      <Expert className="row">
        <div className="col details">
          <Title className="title">Experts In Field</Title>
          <Heading className="heading">We Started From Zero</Heading>
          <Description className="description">
            Every Mockup we drafted, every logo we crafted, every brochure we
            designed, and every website we developed added a milestone to our
            journey
          </Description>
          <Button className="button">
            Careers <BsFillCaretRightFill className="spacing" />
          </Button>
        </div>
        <div className="col projects">
          <Box>
            <div className="Img">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2020/03/shape-02.png"
                title="shape-02"
                alt="shape-02"
                height={20}
                width={30}
              />
            </div>
            <p className="counting">1244+</p>
            <p className="text">Working hours were spent</p>
          </Box>
          <Box className="down">
            <div className="Img">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2020/03/shape-04.png"
                title="shape-02"
                alt="shape-02"
                height={20}
                width={30}
              />
            </div>
            <p className="counting">1244+</p>
            <p className="text">Working hours were spent</p>
          </Box>
        </div>
      </Expert>
    </Section>
  );
};

export default About;
