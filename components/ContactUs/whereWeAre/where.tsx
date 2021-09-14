import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BsFillCaretRightFill } from "react-icons/bs";

const Main = styled.div`
  max-width: 1170px;
  .title {
    color: #844ff7;
    margin: 3rem 0;
    margin-bottom: 1.5rem;
    width: fit-content;
    padding: 5px 15px;
    background: #e1f6fb;
  }
  .heading {
    font-size: 50px;
    font-weight: bold;
    width: fit-content;
    line-height: 52px;
    margin-bottom: 5px;
  }
`;

const Card = styled.div`
  margin: 5rem 0;
  width: 360px;
  h3 {
    text-transform: capitalize;
    font-size: 26px;
    line-height: 32px;
    font-weight: 700;
  }
  p {
    font-size: 18px;
    line-height: 28px;
    color: #757589;
    margin-bottom: 20px;
    width: 360px;
  }
  button {
    transition: all 0.5s;
    position: relative;
    color: #844ff7;
    display: inline-block;
    height: 46px;
    text-decoration: none;
    padding: 5px 25px;
    z-index: 2;
    font-size: 16px;
    background: #fff;
    border: 2px solid #844ff7;
    font-weight: 700;
    &:hover {
      background: #844ff7;
      color: white;
    }
  }
  .img{
    position: relative;
    width: 350px;
    height: 216px;
    margin-bottom: 20px;
  }
  @media (max-width: 968px) {
    margin: 1rem 10px;
  }
  @media (max-width: 560px) {
    width: 100%;
    .img{
      width: 100%;
      height: 300px;
    }
  }
`;

const Where = () => {
  return (
    <section style={{ background: "#FAFAFB" }}>
      <Main className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="title"> Where We Are</div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="heading">Our Office</div>
        </div>
        <div className="row justify-content-between align-items-center">
          <Card className="col">
            <div className="img">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2020/06/contact-01.jpg"
                alt="image"
                layout="fill"
                width={560}
                height={356}
              />
            </div>
            <h3>Chandigarh</h3>
            <p>Ground Floor, C-205, Sector 74, Chandigarh</p>
            <button>
              View On Map <BsFillCaretRightFill className="spacing" />
            </button>
          </Card>
          <Card className="col">
            <div className="img">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/06/contact-02.jpg"
              alt="image"
              layout="intrinsic"
              width={560}
              height={356}
            />
            </div>
            <h3>Mohali</h3>
            <p>
              5th Floor, C-205, Phase 8B, Sahibzada Ajit Singh Nagar, Punjab
              140308
            </p>
            <button>
              View On Map <BsFillCaretRightFill className="spacing" />
            </button>
          </Card>
          <Card className="col">
            <div className="img">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/06/contact-04.jpg"
              alt="image"
              layout="intrinsic"
              width={560}
              height={356}
            />
            </div>
            <h3>Turlock</h3>
            <p>
              Turlock, CA, 95382 <br /> United States
            </p>
            <button>
              View On Map <BsFillCaretRightFill className="spacing" />
            </button>
          </Card>
        </div>
      </Main>
    </section>
  );
};

export default Where;
