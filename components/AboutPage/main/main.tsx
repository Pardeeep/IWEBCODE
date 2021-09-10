import React from "react";
import styled from "styled-components";
import Navbar from "../../navbar/navbar";

const Center = styled.div`
  min-height : 800px;
  max-width: 1170px;
`;

const Detail = styled.div`
  .heading {
    font-size: 54px;
    line-height: 68px;
    margin-bottom: 20px;
    font-weight: bolder;
  }
  p{
    color: #52526c;
    padding-right: 25px;
    font-size: 24px;
    line-height: 38px;
  }
`;

const Main = () => {
  return (
    <section className="container-fluid d-flex justify-content-center">
      <Center className="row ">
        <div className="col d-flex flex-column justify-content-center">
          <Detail className="pb-4">
            <h1 className="row heading ">One of the Top Digital Agencies</h1>
            <p className="row">
              We are a global IT company providing all digital services to our
              valuable customers including web development, mobile app
              development, SEO, logo and branding, and lot more.
            </p>
          </Detail>
        </div>
        <div className="col bg-info h1">SVG</div>
      </Center>
    </section>
  );
};

export default Main;
