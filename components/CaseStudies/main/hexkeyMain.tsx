import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Center = styled.div`
  min-height: 650px;
  max-width: 1140px;
  @media (max-width: 968px) {
    padding: 0 20px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Detail = styled.div`
  .heading {
    font-size: 70px;
    line-height: 68px;
    margin-bottom: 20px;
    font-weight: 700;
    padding : 0;
  }
  p {
    color: #757589;
    padding-right: 30px;
    font-size: 24px;
    line-height: 38px;
    width: 96%;
  }
`;

const Main = () => {
  return (
    <section className="container-fluid d-flex  justify-content-center">
      <Center className="row g-0 w-100">
        <div className="col w-100 g-0 d-flex flex-column justify-content-center">
          <Detail className="p-0 pb-lg-4">
            <h1 className="heading ">Hexkey Infotech</h1>
            <p className="">
            A quick view of industry specific problems solved with design by the awesome team at Keystroke.
            </p>
          </Detail>
        </div>
        <div className="col height w-100  g-0 d-flex  justify-content-center justify-content-lg-end align-items-center">
          <div className="imgContainer">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/12/hexkey-new.png"
              layout="intrinsic"
              width={470}
              height={470}
              alt="image"
            />
          </div>
        </div>
      </Center>
    </section>
  );
};

export default Main;
