import styled from "styled-components";
import Navbar from "../navbar/navbar";
import Image from "next/image";
import { BsFillCaretRightFill } from "react-icons/bs";

const Main = styled.div``;

const InnerPart = styled.div`
  color: black;
  padding: 3.75rem 0;
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column-reverse;
    padding: 0;
  }
`;

const InnerText = styled.div`
  padding: 0;
  @media (max-width: 800px) {

  }
`;

const FirstP = styled.p`
  font-size: 5rem;
  font-weight: 600;
  line-height: 1.2;
  word-spacing: 4px;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const SecondP = styled.p`
  width: 85%;
  font-size: 1.5rem;
  color: #666666;
  padding: 1.2rem 0;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
  }
`;

const Button = styled.button`
  border: 2px solid #8447ff;
  background: transparent;
  color: #8447ff;
  padding: 15px 30px;
  margin: 10px 0;
  font-weight: 700;
  font-size: 16px;
  .spacing {
    margin-left: 20px;
  }
  &:hover {
    color: #fff;
    background: #8447ff;
  }
`;

const Lamp = styled.div`
  width: 70%;
  height: 500px;
  border: 4px solid #8447ff;
  background: #e5e5e5;
  background-size: cover;
  transform: rotate(2deg);
  .customImg {
    position: relative;
    bottom: 20px;
    left: 25px;
    transform: rotate(-2deg);
  }
  @media (max-width: 800px) {
    margin: 1rem 0;
    border: none;
    background: none;
    width: 100%;
    .customImg {
      width: 500px;
      height: 500px;
      overflow-y: hidden;
    }
  }
`;
const Header = () => {
  return (
    <Main className="container">

      <InnerPart className="row">
        <InnerText className="col">
          <FirstP>We Are One Stop For Your All Digital Needs.</FirstP>
          <SecondP>
            We Dont Develop Project to Find Buyers, We Craft Projects that
            Attracts Buyers.
          </SecondP>
          <Button>
            Lets work together <BsFillCaretRightFill className="spacing" />
          </Button>
        </InnerText>
        <div className="col d-flex justify-content-center">
          <Lamp>
            <div className="customImg">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2020/03/keystoke-image-3.jpg"
                alt="IWEBCODE"
                width="450"
                height="650"
                layout="intrinsic"
              />
            </div>
          </Lamp>
        </div>
      </InnerPart>
    </Main>
  );
};

export default Header;
