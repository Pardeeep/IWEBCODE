import React from "react";
import Image from "next/image";

import styled from "styled-components";

const Main = styled.div`
  min-height: 100vh;
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
    text-align: center;
  }
  .paragraph {
    text-align: center;
    color: #808093;
    font-size: 20px;
    line-height: 30px;
    width: 52%;
  }
`;

const Card = styled.div`
  margin-top: 2rem;
  min-width: 300px;
  width: 350px;
  height: fit-content;
  margin-right: 1.4rem;
  padding: 0;
  .icon {
    font-family: icomoon !important;
    speak: never;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    position: relative;
  }
  .bg2 {
    background: #ff9166;
  }
  .bg3 {
    background: #49ccff;
  }
  .bg4 {
    background: #ffcd3e;
  }
  .bg5 {
    background: #5bcc9f;
  }
  .text {
    font-size: 26px;
    color: #fff;
    font-weight: 700;
    position: absolute;
    top: 17px;
    left: 24px;
  }
  h4 {
    padding-top: 40px;
    margin-bottom: 20px;
    font-weight: bolder;
  }
  .paragraph {
    text-align: left;
    font-size: 18px;
    line-height: 28px;
    color: #757589;
    width: 100%;
  }
`;

const Values = () => {
  return (
    <Main className="container">
      <div className="row justify-content-center flex-column align-items-center">
        <div className="title">Our Values</div>
        <div className="heading">Why Should You Work With Us?</div>
        <p className="paragraph">
          We are an equal opportunity organization and ensure that our staff
          works passionately. We appreciate and support those who drive change
          to help us strengthen our leadership
        </p>
      </div>
      <div className="row">
        <Card className="col">
          <div className="icon" style={{ background: "#844ff7" }}>
            <Image
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
              layout="intrinsic"
              width={200}
              height={200}
            />
            <div className="text">1</div>
          </div>
          <h4>We Are Innovative Digital Marketing Agency</h4>
          <p className="paragraph">
            We&#39;re a small, yet innovative digital marketing agency taking
            great pride in what we do.
          </p>
        </Card>
        <Card className="col">
          <div className="icon bg2">
            <Image
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
              layout="intrinsic"
              width={200}
              height={200}
            />
            <div className="text">2</div>
          </div>
          <h4>We Invest In Technology</h4>
          <p className="paragraph">
            We are daily investing in the very best technology to ensure that
            our customers have access to technology, which is usually only found
            in much larger agencies
          </p>
        </Card>
        <Card className="col">
          <div className="icon bg3">
            <Image
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
              layout="intrinsic"
              width={200}
              height={200}
            />
            <div className="text">3</div>
          </div>
          <h4>We Are Honest And Trustworthy</h4>
          <p className="paragraph">
            We are always committed and never say we can do something if we
            can&#39;t
          </p>
        </Card>
        <Card className="col">
          <div className="icon bg4">
            <Image
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
              layout="intrinsic"
              width={200}
              height={200}
            />
            <div className="text">4</div>
          </div>
          <h4> We Value You</h4>
          <p className="paragraph">
            We&#39;re all very much friendly. We value your business and will
            often go that extra mile to meet your expectations
          </p>
        </Card>
        <Card className="col">
          <div className="icon bg5">
            <Image
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
              layout="intrinsic"
              width={200}
              height={200}
            />
            <div className="text">5</div>
          </div>
          <h4>We Are Into The Technology</h4>
          <p className="paragraph">
            We know our industry very well. We keep up to date with the latest
            changes, legislation, techniques, styles, innovations, and
            conversations
          </p>
        </Card>
        <Card className="col">
          <div className="icon bg-dark">
            <Image
              src="https://iwebcode.design/wp-content/themes/keystroke/assets/images/icons/layer.png"
              alt="Icon Images"
              layout="intrinsic"
              width={200}
              height={200}
            />
            <div className="text">6</div>
          </div>
          <h4>Learn From Success And Failures</h4>
          <p className="paragraph">
            Surely, nobody is perfect but still one can be near to perfection.
            We always accept our mistake and learn from them for better success
            and progress
          </p>
        </Card>
      </div>
    </Main>
  );
};

export default Values;
