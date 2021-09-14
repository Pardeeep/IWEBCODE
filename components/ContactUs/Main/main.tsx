import React from "react";
import styled from "styled-components";

const Center = styled.div`
  padding: 12px 23px;
  max-width: 1170px;
  padding-bottom: 65px;
  .heading {
    font-size: 54px;
    line-height: 68px;
    letter-spacing: 0.6px;
    margin-bottom: 20px;
    font-weight: bolder;
  }
  @media (max-width: 968px) {
    padding: 0 20px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Main = () => {
  return (
    <section style={{background: "#F7F7FF"}}>
      <Center className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="heading">Contact</h1>
          </div>
          <div className="col d-none d-md-flex justify-content-center align-items-center heading">Svg</div>
        </div>
      </Center>
    </section>
  );
};

export default Main;
