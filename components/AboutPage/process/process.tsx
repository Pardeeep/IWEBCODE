import React from "react";
import Image from "next/image";

import styled from "styled-components";

const Main = styled.section`
  min-height: 100vh;
  margin: 3rem 0;
  padding: 4rem 5rem;
  background: linear-gradient(180deg, #fef7e2 0, #eeeefd 100%);
  .title {
    padding: 5px 10px;
    color: #844ff7;
    background: #e3f3e6;
    width: fit-content;
    margin-bottom: 10px;
  }
  .heading {
    font-size: 50px;
    text-align: center;
    line-height: 60px;
    margin: 20px 0;
    font-weight: bolder;
    width: 90%;
    @media (max-width: 968px) {
      font-size: 40px;
    }
  }
  p {
    color: #808093;
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    width: 50%;
    @media (max-width: 968px) {
      width: 70%;
      font-size: 18px;
    }
  }
`;

const Card = styled.div`
  margin-top: 6rem;
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  .image {
    height: 280px;
    width: 280px;
    @media (max-width: 968px) {
      height: 340px;
      width: 340px;
    }
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
  .details {
    max-width: 570px;
    width: 570px;
    margin: 0 6rem;
    @media (max-width: 968px) {
      margin: 0;
      width: 100%;
      padding: 0;
      margin-top: 5rem;
    }
    @media (max-width: 768px) {
      width: 100%;
      padding: 0;
      height: 100%;
    }
  }
  h2 {
    font-size: 36px;
    font-weight: 550 !important;
    padding: 1rem 0;
  }
  p {
  }
  .paragraph {
    text-align: left;
    width: 100%;
  }

  .text {
    box-sizing: border-box;
    height: 149px;
    width: 149px;
    border: 1px solid #979797;
    opacity: 0.3;
    line-height: 149px;
    display: inline-block;
    color: #737387;
    font-size: 60px;
    position: absolute;
    right: 0px;
    top: -58px;
    border-radius: 100%;
    text-align: center;
    @media (max-width: 968px) {
      width: 100px;
      font-size: 40px;
      line-height: 100px;
      height: 100px;
    }
    @media (max-width: 768px) {
      width: 60px;
      font-size: 30px;
      line-height: 60px;
      height: 60px;
    }
  }
`;

const Second = styled.div`
  .details {
    margin: 0;
    margin-left: 6rem;
    margin-right: 4rem;
  }
  .title2 {
    background: #F7E8E1;
    color: #844ff7;
  }
  .title3 {
    background: #ebdeed;
    color: #FE9165;
  }
  .title4 {
    background: #DAE4F5;
    color: #238BFD;
  }
  .title5 {
    background: #D8ECFA;
    color: #844ff7;
  }
  @media (max-width: 968px) {
    .card2 {
      flex-direction: column-reverse;
    }
  }
`;

const Process = () => {
  return (
    <Main className="container-fluid">
      <div className="row flex-column align-items-center">
        <div className="title">Process</div>
        <div className="heading">Our Working Process</div>
        <p>
          We work on Agile course of action to produce great results. We prepare
          our plans as per customer’s requirements and follow a five-step
          process to achieve our goals.
        </p>
      </div>
      <div className="row">
        <Card className="col d-flex justify-content-center g-0">
          <div className="image">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/04/process-01.jpg"
              alt="img"
              layout="intrinsic"
              width={500}
              height={500}
            />
          </div>
          <div className="details position-relative d-flex flex-column justify-content-center">
            <div className="title">Our Five Step Process</div>
            <h2>Research</h2>
            <p className="paragraph">
              We appreciate your intentions and keep you at top most priority.
              We understand your business and perform proper research about the
              same and prepare a proper inception plan
            </p>
            <div className="text">1</div>
          </div>
        </Card>
      </div>
      <Second className="row">
        <Card className="col card2 d-flex justify-content-center g-0">
          <div className="details position-relative d-flex flex-column justify-content-center">
            <div className="title title2">Our Five Step Process</div>
            <h2>Plan</h2>
            <p className="paragraph">
              We plan according to the timeframe and deadlines. We sit with you
              and discuss each and everything in detail to make things work
              properly. This includes front end, technologies, graphics, content
              and almost everything
            </p>
            <div className="text">2</div>
          </div>
          <div className="image">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/04/process-02.jpg"
              alt="img"
              layout="intrinsic"
              width={500}
              height={500}
            />
          </div>
        </Card>
      </Second>
      <div className="row">
        <Card className="col d-flex justify-content-center g-0">
          <div className="image">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/04/process-01.jpg"
              alt="img"
              layout="intrinsic"
              width={500}
              height={500}
            />
          </div>
          <div className="details position-relative d-flex flex-column justify-content-center">
            <div className="title title3">Our Five Step Process</div>
            <h2>Implement</h2>
            <p className="paragraph">
              This is the most crucial phase and here we are striving hard to
              satisfy you. We implement the project and timely execute the same
              to meet the committed deadlines
            </p>
            <div className="text">3</div>
          </div>
        </Card>
      </div>
      <Second className="row">
        <Card className="col card2 d-flex justify-content-center g-0">
          <div className="details position-relative d-flex flex-column justify-content-center">
            <div className="title title3">Our Five Step Process</div>
            <h2>Test And Deliver</h2>
            <p className="paragraph">
              We do rigorous testing before deployment and concisely record all
              inputs and seek your approval for the project before finalizing
            </p>
            <div className="text">4</div>
          </div>
          <div className="image">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/04/process-04.jpg"
              alt="img"
              layout="intrinsic"
              width={500}
              height={500}
            />
          </div>
        </Card>
      </Second>
      <div className="row">
        <Card className="col d-flex justify-content-center g-0">
          <div className="image">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/04/breadcrumb-4.jpg"
              alt="img"
              layout="intrinsic"
              width={500}
              height={500}
            />
          </div>
          <div className="details position-relative d-flex flex-column justify-content-center">
            <div className="title title4">Our Five Step Process</div>
            <h2>Optimize And Maintain</h2>
            <p className="paragraph">
              We steadily climb up the hill with you and keep a constant check
              on everything. We keep checking your brand reputation and
              calculate numerous stats about its progress
            </p>
            <div className="text">5</div>
          </div>
        </Card>
      </div>
    </Main>
  );
};

export default Process;
