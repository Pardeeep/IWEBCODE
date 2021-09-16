import React from "react";
import styled from "styled-components";

const Center = styled.div`
  min-height: 660px;
  max-width: 1170px;
  @media (max-width: 968px) {
    padding: 0 20px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Detail = styled.div`
  padding:0 10px 3.2rem;
  .heading {
    font-size: 55px;
    line-height: 68px;
    margin-bottom: 20px;
    font-weight: bolder;
    padding: 0;
  }
  p {
    color: #52526c;
    padding-right: 30px;
    font-size: 24px;
    line-height: 38px;
    width: 95%;
  }
`;

const Main = () => {
  return (
    <section className="container-fluid d-flex  justify-content-center">
      <Center className="row w-100 ">
        <div className="col-7 d-flex  flex-column justify-content-center">
          <Detail className="  ">
            <h1 className="row heading">Best Solutions For Your Business</h1>
            <p className="row">
              IWEBCODE solves the most challenging issues faced by clients. We
              are an IT Hub to tackle  <br /> all your issues
            </p>
          </Detail>
        </div>
        <div className="col d-flex h1 justify-content-center align-items-center">Svg</div>
      </Center>
    </section>
  );
};

export default Main;
