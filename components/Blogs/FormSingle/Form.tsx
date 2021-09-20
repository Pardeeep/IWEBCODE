import React from "react";
import styled from "styled-components";

const FormBox = styled.div`
  padding: 30px 35px;
  min-height: 250px;
  width: 100%;
  margin: 4rem 0;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 1170px;
  background: #fff;
  box-shadow: -5px 5px 7px -3px rgb(0 0 0 / 10%);
  .heading {
    font-size: 35px;
    line-height: 46px;
    color: #000248;
    font-weight: 700;
  }
  .check {
    label {
      font-size: 15px;
      line-height: 26px;
      color: #757589;
      font-weight: 400;
      padding-left: 20px;
      cursor: pointer;
    }
    input::checked {
      background: #844ff7;
      color: #844ff7;
    }
  }
  p {
    font-size: 18px;
    line-height: 28px;
    color: #757589;
  }
  @media (max-width: 968px) {
    margin: 3rem 10px;
    box-shadow: 2px 0px 24px -9px rgba(0, 0, 0, 0.75);
  }
`;
const Button = styled.button`
  background: #000248;
  border-color: #000248;
  color: #fff;
  font-size: 16px;
  padding: 0 25px;
  height: 46px;
  line-height: 42px;
  border-width: 2px;
  font-weight: 500;
  margin-top: 30px;
  .spacing {
    margin-left: 20px;
  }
  &:hover {
    color: #000248;
    background: #fff;
  }
`;

const StyleInput = styled.div`
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
    text-align: top;
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
  }
  .input:focus ~ .label,
  .input:not(:placeholder-shown).input:not(:focus) ~ .label {
    top: -0.5rem;
    font-size: 0.9rem;
    color: #844ff7;
  }
`;

const Form = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center"
      style={{ background: "#fff" }}
    >
      <FormBox className="row">
        <h1 className="heading">Leave a Reply</h1>
        <p>
          Your email adress will not be published. Required fields are marked *
        </p>
        <div className="container">
          <div className="row w-100 g-0">
            <StyleInput className="form col">
              <input
                type="text"
                id="text"
                className="input"
                autoComplete="off"
                placeholder=" "
                style={{ width: "95% !important" }}
              />
              <label className="label">Full Name*</label>
            </StyleInput>
            <StyleInput className="form col">
              <input
                type="text"
                id="text"
                className="input"
                autoComplete="off"
                placeholder=" "
              />
              <label className="label">Email*</label>
            </StyleInput>
          </div>
          <StyleInput className="form col">
            <input
              type="text"
              id="text"
              className="input"
              autoComplete="off"
              placeholder=" "
            />
            <label className="label">Website</label>
          </StyleInput>
          <StyleInput
            className="form col"
            style={{ height: "10rem !important" }}
          >
            <input
              type="text"
              id="text"
              className="input"
              autoComplete="off"
              placeholder=" "
            />
            <label className="label">Write Your Comment here... *</label>
          </StyleInput>
          <div className="check">
            <input type="checkbox" name="save" id="save" />
            <label htmlFor="save">
              Save my name,email and website in this browser for the next time I
              comment
            </label>
          </div>
          <Button>Post Comment</Button>
        </div>
      </FormBox>
    </div>
  );
};

export default Form;
