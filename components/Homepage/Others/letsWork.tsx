import { BsFillCaretRightFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import styled from "styled-components";

const Flex1 = styled.div`
  min-height: 50vh;
  background: #fafafb;
  padding: 3rem 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .call {
    margin-top: 1.6rem;
    font-size: 14px;
    color: gray;
    padding-bottom: 2rem;
  }

  .icon {
    color: black;

    font-size: 22px;
  }

  .call span {
    padding-left: 30px;
  }
`;
const Button = styled.div`
  border: 2px solid #844ff7;
  padding: 15px 25px;
  color: #844ff7;
  &:hover {
    color: white;
    background: #844ff7;
  }
`;
const A = styled.a`
  font-size: 22px;
  font-weight: 700;
  color: #000248;
  text-decoration: none;
  &:hover {
    color: #8447ff;
  }
`;

const Title = styled.p`
  background: #e1f6fb;
  color: #844ff7;
  padding: 5px 20px;
  width: fit-content;
  text-align: center;
`;

const Heading = styled.h1`
  margin: 1.3rem 0;
  font-size: 55px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 968px) {
  }
`;

const LetsWork = () => {
  return (
    <Flex1 className="d-flex justify-content-center align-items-center">
      <Title>Lets Work Together</Title>
      <Heading>Need Our Services? Get A Quote Now!</Heading>
      <Button>
        Estimate Project <BsFillCaretRightFill className="spacing" />
      </Button>
      <div className="call">
        Or call us now
        <span>
          <FaPhoneAlt className="icon" />{" "}
          <A href="tel: +9175032750322">(+91) 75032 50322</A>
        </span>
      </div>
    </Flex1>
  );
};

export default LetsWork;
