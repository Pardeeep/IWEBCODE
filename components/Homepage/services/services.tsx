import React from "react";
import styled from "styled-components";
import { Cards } from "./Cards";

const Main = styled.div`
  @media (max-width: 800px) {
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
  width: 86%;
  letter-spacing: 1.3px;
  margin-top: 0.5rem;
  line-height: 3.9rem;
  text-align: center;

  @media (max-width: 800px) {
    width: 12em;
    font-size: 2rem;
  }
`;
const SubDescription = styled.p`
  width: 28em;
  margin-top: 5px;
  font-size: 1.3rem;
  text-align: center;
  color: gray;
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
const Section = styled.section`
  min-height: 800px;
  max-width: 1200px;
  padding: 0 4rem;
`;

const Services = () => {
  return (
    <Section className="container">
      <div className="row">
        <div className="col">
          <Main className="d-flex justify-content-start flex-column align-items-center">
            <Title>Services</Title>
            <Description>
              We Offer Multi-Dimensional Solutions To All Your IT Problems
            </Description>
            <SubDescription>
              We provide one-stop solution for all digital support you need
              under one roof.
            </SubDescription>
          </Main>
        </div>
      </div>
      <div className="row">
        <Cards />
      </div>
    </Section>
  );
};

export default Services;
