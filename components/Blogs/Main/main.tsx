import React, { useState, useEffect } from "react";
import styled from "styled-components";


const Center = styled.div`
  min-height: 230px;
  max-width: 1170px;
  .heading {
    font-size: 55px;
    line-height: 227px;
    letter-spacing: 1px;
    font-weight: bolder;
    padding-left: 13px;
  }
  @media (max-width: 968px) {
    padding: 0 20px;
  }
`;



const Main = () => {
  return (
    <section>
      <Center className="container">
        <div className="row">
          <h1 className="col heading d-flex align-items-center">Blogs</h1>
          <div className="col heading d-flex align-items-center justify-content-center">
            svg
          </div>
        </div>
      </Center>

    </section>
  );
};

export default Main;
