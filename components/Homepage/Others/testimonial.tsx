import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const Main = styled.section`
  background: #fafafb;
  padding: 4rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  .max {
    max-width: 1170px;
  }
`;

const Title = styled.p`
  background: #ede4fb;
  color: #9362fd;
  padding: 5px;
  width: 120px;
  text-align: center;
`;

const Heading = styled.h1`
  margin: 1.3rem 0;
  text-align: center;
  line-height: 60px;
  font-size: 45px;
  font-weight: 600;
  width: 70%;
  @media (max-width: 800px) {
    margin: 1rem 0;
    width: 100%;
  }
`;

const Subheading = styled.p`
  color: #9a9aa9;
  font-size: 18px;
  width: 50%;
  text-align: center;
  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Flex = styled.div``;

const Box = styled.div`
  box-shadow: -52px 52px 70px -30px rgb(0 0 0 / 10%);
  background: #fff;
  padding: 1rem;
  margin: 0 1.5rem;
  .position {
    color: gray;
    font-size: 16px;
  }
  .flex {
    display: flex;
    padding: 0 !important;
    padding-top: 1rem !important;
    height: 100px;
  }
  .flex::after {
    content: '"';
    color: black;
    color: #844ff7;
    width: 30%;
    font-size: 200px;
    position: relative;
    top: -60px;
    text-align: right;
  }
  .img {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: gray;
    margin: 0 20px;
  }
  .text {
    width: 100%;
    text-align: left;
    font-size: 25px;
    padding: 0 1rem;
    color: #555;
    line-height: 1.5;
    margin: 0;
  }
  @media (max-width: 968px) {
  }
`;
const Testimonial = () => {
  return (
    <Main>
      <div className="container-fluid max">
        <div className="row d-flex flex-column justify-content-start align-items-center">
          <Title>Testimonials</Title>
          <Heading>
            Don’t Get Impressed By Our Words, Judge Us By Our Portfolio
          </Heading>
          <Subheading>
            We rely on positive feedback provided by our valuable customers.
            Please read below and see what they feel about IWEBCODE.
          </Subheading>
        </div>
        <Flex className="container-fluid max">
          <div className="row d-flex justify-content-center ">
            <Box className="col-5">
              <div className="flex">
                <div className="img">
                  <FaUser className="pic" data-fa-mask="fas fa-circile" />
                </div>
                <div className="Name">
                  <h3>Mandy Ryan</h3>
                  <p className="position">CEO @ Manifest Media Agency</p>
                </div>
              </div>
              <Subheading className="text">
                &#34;IWEBCODE is an amazing asset to my business! They are
                reliable, timely and I can&apos;t imagine not having his help.
                I&apos;m looking forward to working together for years to come.
                &#34;
              </Subheading>
            </Box>
            <Box className="col-4">
              <div className="flex">
                <div className="img">
                  <FaUser className="pic" data-fa-mask="fas fa-circile" />
                </div>
                <div className="Name">
                  <h3>Aeron</h3>
                  <p className="position">CEO @ Maids in Red</p>
                </div>
              </div>
              <p className="text">
                &#34;Great Website development agency, looking forward to
                working with them again in the future! &#34;
              </p>
            </Box>
          </div>
        </Flex>
      </div>
    </Main>
  );
};

export default Testimonial;
