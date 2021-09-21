import React from "react";
import Image from "next/image";

import styled from "styled-components";

const Main = styled.section`
  min-height: 800px;

  padding: 4rem 5rem;
  margin-bottom: 0;
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
    max-width: 1170px;
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
    background: #f7e8e1;
    color: #844ff7;
  }
  .title3 {
    background: #ebdeed;
    color: #fe9165;
  }
  .title4 {
    background: #dae4f5;
    color: #238bfd;
  }
  .title5 {
    background: #d8ecfa;
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
          Our comprehensive logo design strategy ensures a perfectly crafted
          logo for your business.
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
            <div className="title">Our Four Step Process</div>
            <h2>Discover</h2>
            <p className="paragraph">
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
              tristique libero at dui sodales, et placerat orci lobortis.
              Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae
              mauris.
            </p>
            <div className="text">1</div>
          </div>
        </Card>
      </div>
      <Second className="row">
        <Card className="col card2 d-flex justify-content-center g-0">
          <div className="details position-relative d-flex flex-column justify-content-center">
            <div className="title title2">Our Four Step Process</div>
            <h2>Prototype</h2>
            <p className="paragraph">
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
              tristique libero at dui sodales, et placerat orci lobortis.
              Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae
              mauris.
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
            <div className="title title3">Our Four Step Process</div>
            <h2>Development</h2>
            <p className="paragraph">
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
              tristique libero at dui sodales, et placerat orci lobortis.
              Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae
              mauris.
            </p>
            <div className="text">3</div>
          </div>
        </Card>
      </div>
      <Second className="row">
        <Card className="col card2 d-flex justify-content-center g-0">
          <div className="details position-relative d-flex flex-column justify-content-center">
            <div className="title title3">Our Four Step Process</div>
            <h2>Build</h2>
            <p className="paragraph">
              Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
              lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam
              tristique libero at dui sodales, et placerat orci lobortis.
              Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae
              mauris.
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
    </Main>
  );
};

export default Process;
