import React from "react";
import styled from "styled-components";
import LetsWork from "./letsWork";

const Main = styled.div`
  background: #fafafb;
  padding: 4rem;
  max-width: 1170px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  background: #e1f6fb;
  color: #844ff7;
  padding: 5px 20px;
  width: fit-content;
  text-align: center;
`;

const Heading = styled.h1`
  margin: 1.3rem 0;
  font-size: 55px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 968px) {
  }
`;

const P = styled.p`
  font-size: 20px;
  color: #8a8a9b;
  text-align: center;
  width: 50%;
  @media (max-width: 968px) {
    width: 100%;
  }
`;

const Flex = styled.div`
  background: #fafafb;
  max-width: 1170px;
  @media (max-width: 1030px) {
    margin: 0;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
  @media (max-width: 968px) {
    padding-bottom: 20rem;
  }
  .first {
    background-image: url("https://iwebcode.design/wp-content/uploads/2021/08/Group-223-410x452.jpg");
  }
  .second {
    background-image: url("https://iwebcode.design/wp-content/uploads/2021/08/Group-218-min-410x452.jpg");
  }
`;
const Card = styled.div`
  margin-left: 10rem;
  cursor: pointer;
  background-size: cover;
  width: 410px;
  height: 452px;
  margin-bottom: 4rem;
  @media (max-width: 1040px) {
    margin-left: 7rem;
    width: 350px;
  }
  @media (max-width: 968px) {
    width: 320px;
    height: 350px;
    margin-left: 20px;
  }
`;

const Content = styled.div`
  width: 350px;
  padding: 2rem;
  margin-bottom: 2rem;
  background: #fff;
  box-shadow: -52px 52px 70px -30px rgb(0 0 0 / 10%);

  position: relative;
  top: 90px;
  left: -100px;
  .heading {
    font-size: 20px;
  }
  .paragraph {
    color: #7a7a8e;
    font-size: 17px;
  }
  @media (max-width: 968px) {
    width: 320px;
    height: 300px;
    top: 320px;
    left: 0;
  }
`;

const Tags = styled.div`
  display: flex;
  p {
    background: #844ff7;
    color: white;
    font-size: 15px;
    padding: 2px 5px;
    margin: 0;
    margin-right: 5px;
  }
`;

const Present = () => {
  return (
    <section
      className="container-fluid d-flex flex-column align-items-center justify-content-center "
      style={{ backgroundColor: " #fafafb" }}
    >
      <Main className="row">
        <Title> What&#39;s Going On</Title>
        <Heading> What&#39;s Going In It Now!</Heading>
        <P>
          Technology is rapidly evolving and there has been a great change.
          Staying updated with latest technology trends and keeping an eye on
          future is necessary to secure a safe tomorrow.
        </P>
      </Main>
      <div className="row">
        <Flex className="d-flex justify-content-center align-items-center">
          <Card className="first">
            <Content>
              <Tags>
                <p>Design</p>
                <p>Website Development</p>
              </Tags>
              <Heading className="heading">
                How Much Cost Required To Build A Business Website In 2021?
              </Heading>
              <p className="paragraph">
                So, you’ve decided to create a website for your company or
                store. But since the market is s...
              </p>
            </Content>
          </Card>
          <Card className="first">
            <Content>
              <Tags>
                <p>Online Marketing</p>
              </Tags>
              <Heading className="heading">
                Why We Need Off Page Optimization For SEO?
              </Heading>
              <p className="paragraph">
                Off-page SEO is a powerful SEO method that improves a website’s
                capacity to rank higher on ...
              </p>
            </Content>
          </Card>
        </Flex>
      </div>
      <div className="row">
        <LetsWork />
      </div>
    </section>
  );
};

export default Present;

