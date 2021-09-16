import React from "react";
import styled from "styled-components";

const Center = styled.div`
  min-height: 660px;
  max-width: 1170px;
  @media (max-width: 980px) {
    padding: 0 20px;
    display: flex;
    flex-direction: column-reverse;
  }
  @media( max-width: 600px){
    padding: 0;
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
  }
  @media(max-width: 1100px){
    margin: 0 2rem;
    p{
      font-size: 20px;
    }
    p br{
      display: none;
    }
  }
  @media (max-width: 980px){
    margin:0 4rem ;
    .heading{
      font-size: 40px;
    }
  }
  @media (max-width: 768px){
    margin:0 2rem ;
    padding: 0;
    .heading{
      font-size: 25px;
    }
    p{
      font-size: 20px;
    }
  }
  @media( max-width: 568px){
    margin: 0 10px;

    .heading{
      line-height: 1.3;

    }
    p{
      font-size: 16px;
      padding: 0;
    }
  }
`;

const Main = () => {
  return (
    <section className="container-fluid d-flex justify-content-center">
      <Center className="row w-100">
        <div className="col  d-flex  flex-column justify-content-center">
          <Detail className="">
            <h1 className="row heading">Best Solutions For Your Business</h1>
            <p className="row">
              IWEBCODE solves the most challenging issues <br /> faced by clients. We
              are an IT Hub to tackle <br /> all your issues
            </p>
          </Detail>
        </div>
        <div className="col d-flex h1 justify-content-center align-items-center">Svg</div>
      </Center>
    </section>
  );
};

export default Main;
