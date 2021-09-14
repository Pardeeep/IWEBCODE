import React from "react";
import styled from "styled-components";
import { BsFillCaretRightFill } from "react-icons/bs";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const FormBox = styled.div`
  padding: 30px 35px;
  min-height: 650px;
  margin: 4rem 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 500px;
  width: 400px;
  box-shadow: -52px 52px 70px -30px rgb(0 0 0 / 10%);
  .heading {
    font-size: 35px;
    line-height: 52px;
    margin-bottom: 5px;
  }
  @media (max-width: 968px) {
    width: 100%;
    margin: 3rem 10px;
    box-shadow: 2px 0px 24px -9px rgba(0,0,0,0.75);
  }
`;
const Button = styled.button`
  padding: 12px;
  border: 2px solid #8447ff;
  font-size: 20px;
  font-weight: bold;
  background: transparent;
  margin: 1rem 0;
  width: fit-content;
  margin-top: 6.5rem;
  color: #8447ff;
  .spacing {
    margin-left: 20px;
  }
  &:hover {
    color: #fff;
    background: #8447ff;
  }
`;

const StyleInput = styled.form`
  position: relative;
  min-height: 1rem;
  padding: 33px 0;
  margin: 10px 0;
  .input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    border: none;
    opacity: 0.8;
    border-bottom: 2px solid #d5d5d5;
    color: black;
    outline: none;
    padding: 1.25rem 0;
    background: none;
    &:focus {
      border-color: #844ff7;
    }
  }
  .label {
    position: absolute;
    left: 0;
    top: 0.8rem;
    color: gray;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background-color: #fff;
  }
  .input:focus ~ .label,
  .input:not(:placeholder-shown).input:not(:focus) ~ .label {
    top: -0.5rem;
    font-size: 0.9rem;
    color: #844ff7;
  }
`;

const Heading = styled.h1`
  margin: 1.6rem 0;
  line-height: 60px;
  font-size: 42px;
  font-weight: bold;
  @media (max-width: 800px) {
    margin: 1rem 0;
    `;

const Box = styled.div`
  box-shadow: -35px 20px 50px -30px rgb(0 0 0 / 10%);
  padding: 50px;
  z-index: 2;
  max-width: 500px;
  }
  min-height: 360px;
  padding-right: 80px;
  .icon {
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 26px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    line-height: 28px;
    color: #757589;
    margin-bottom: 15px;
  }
  .contact {
      position: relative;
    font-weight: 700;
    font-size: 22px;
    text-decoration: none;
    color: #844ff7;
    &::after {
      content: "";
      width: 0;
      height: 1px;
      bottom: 0;
      position: absolute;
      left: auto;
      right: 0;
      z-index: -1;
      -webkit-transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
      -o-transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
      transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
      background: currentColor;
    }
    :hover{
        &::after{
            width: 100%;
        }
    }
  }
`;

const Form = () => {
  return (
    <section
      style={{ background: "#fff" }}
      className="container-fluid d-flex justify-content-center"
    >
      <div className="container" style={{ maxWidth: "1170px" }}>
        <div className="row g-0  w-100">
          <div className="col-lg-5 g-0 d-flex justify-content-center">
            <FormBox className="">
              <Heading className="heading">
                Get A Free IWEBCODE Quote Now
              </Heading>
              <div className="styles">
                <StyleInput className="form">
                  <input
                    type="text"
                    id="text"
                    className="input"
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label className="label">Name</label>
                </StyleInput>
                <StyleInput className="form">
                  <input
                    type="text"
                    id="email"
                    className="input"
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label className="label">Email</label>
                </StyleInput>

                <StyleInput className="form">
                  <input
                    type="number"
                    id="email"
                    className="input"
                    autoComplete="off"
                    placeholder=" "
                  />
                  <label className="label">Phone</label>
                </StyleInput>

                <StyleInput className="form">
                  <input
                    type="text"
                    className="input message"
                    autoComplete="off"
                    placeholder=" "
                    style={{ height: "150px" }}
                  />
                  <label className="label">Your Message</label>
                </StyleInput>
              </div>
              <Button>
                Send Message <BsFillCaretRightFill className="spacing" />
              </Button>
            </FormBox>
          </div>
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-center pb-5">
            <Box>
              <FaPhoneAlt className="icon" />
              <h1>Phone</h1>
              <p>
                We are available 24/7 to assist you. Our customer care team is
                available 5 days a week from Monday till Friday. Available
                timings are 10 Am till 18:00.
              </p>
              <a href="tel" className="contact">
                (+91) 75032 750322
              </a>
            </Box>
            <Box>
              <FaEnvelope className="icon" />
              <h1>Phone</h1>
              <p>
                We are available 24/7 to assist you. Our customer care team is
                available 5 days a week from Monday till Friday. Available
                timings are 10 Am till 18:00.
              </p>
              <a href="mailto" className="contact">
                hello@iwebcode.design
              </a>
            </Box>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
