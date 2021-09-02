import React from "react";
import styled from "styled-components";
import { Cards } from "./Cards";

const Main = styled.div`
  margin: 8.5rem 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media(max-width: 800px){
    margin: 4rem 0;
  }
`;

const Title = styled.p`
  background: #e5faf5;
  color: #9362fd;
  padding: 5px;
  width: 90px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 3rem;
  font-weight: 550;
  letter-spacing: 1.3px;
  margin-top: 0.5rem;
  line-height: 3.9rem;
  width: 19em;
  text-align: center;

  @media(max-width: 800px){
    width: 80%;
    font-size: 2rem;
  }
`;
const SubDescription = styled.p`
    width: 28em;
    margin-top: 5px;
    font-size: 1.3rem;
    text-align: center;
    color: gray;
    @media(max-width: 800px){
      font-size: 1rem;
    }
`;


const Services = () => {
  return (
    <>
    <Main>
      <Title>Services</Title>
      <Description>
        We Offer Multi-Dimensional Solutions To All Your IT Problems
      </Description>
      <SubDescription>
        We provide one-stop solution for all digital support you need under one
        roof.
      </SubDescription>

    </Main>
    <Cards />
    </>
  );
};

export default Services;
