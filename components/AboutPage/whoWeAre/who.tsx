import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BsFillCaretRightFill } from "react-icons/bs";

const Main = styled.section`
  min-height: 800px;
  max-width: 1170px;
  .direction{
    @media(max-width: 968px){
      flex-direction: column;
    }
  }
`;

const Detail = styled.div`
  .title {
    padding: 5px 10px;
    color: #844ff7;
    background: #e5faff;
    width: fit-content;
    margin-bottom: 10px;
  }
  .heading {
    font-size: 50px;
    line-height: 60px;
    margin: 20px 0;
    font-weight: bolder;
    width: 90%;
    @media( max-width: 968px ){
      width: 100%;
      font-size: 36px;
    }
  }
  p {
    color: #808093;
    font-size: 20px;
    line-height: 30px;
    width: 95%;
    @media( max-width: 968px ){
      width: 100%;
      margin-bottom: 20px;
    }
  }
  button {
    width: fit-content;
    border: none;
    border: 2px solid #844ff7;
    background: none;
    padding: 12px 25px;
    color: #844ff7;
    font-size: 18px;
    font-weight: bold;
    &:hover {
      background: #844ff7;
      color: #fff;
    }
  }
`;
const Who = () => {
  return (
    <Main className="container">
      <div className="row">
        <div className="col direction d-flex justify-content-center">
          <div className="col d-flex ">
            <div className="imgContainer d-flex  justify-content-center align-items-center">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2020/04/featured-image-02.jpg"
                layout="intrinsic"
                width={600}
                height={450}
                alt="image"
              />
            </div>
          </div>
          <Detail className="col-lg-5 d-flex flex-column justify-content-center px-1">
            <div className="title">Who We Are</div>
            <h1 className="heading">
              Global Software Development Services For World Changers
            </h1>
            <p>
              IWEBCODE develops software applications letting people live
              differently. Customers share their challenges with our skilled
              team and we work all together to deliver revolutionary software
              products.
            </p>
            <button className="">
              View More <BsFillCaretRightFill />
            </button>
          </Detail>
        </div>
      </div>
    </Main>
  );
};

export default Who;
