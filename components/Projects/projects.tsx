import React from "react";
import styled from "styled-components";
import Card from "./card";

const Main = styled.section`
  margin: 5rem 0;
  padding: 0 4rem;
  div {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 800px) {
    padding: 0 20px;
    div{  flex-direction: column; justify-content: space-evenly;}
  }
`;
const Title = styled.p`
  background: #e5f1ff;
  color: #9362fd;
  padding: 5px;
  width: 120px;
  text-align: center;
  margin: 0;
`;

const Heading = styled.div`
  margin: 1.3rem 0;
  line-height: 50px;
  font-size: 44px;
  font-weight: 600;
  width: 40%;
  @media (max-width: 800px) {
    margin: 1rem 0;
    width: 100%;
  }
`;

const Pages = styled.div`
  width: 38%;
  display: flex;
  align-items: flex-end;
  p {
    font-weight: bold;
    height: 100px;
    padding: 0 18px;
    min-width: 70px;
    display: grid;
    place-items: center;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.05);
  }
  @media(max-width: 800px){
        width: 100%;
        flex-direction: row !important;
        p{
        }
  }
`;

const Cards = styled.div`
  display: grid;
  padding: 0 4rem;
  grid-template-columns: auto auto auto;
  place-items: center;
  min-height: 100vh;
  grid-column-gap: 20px;
  @media ( max-width: 800px){
    grid-template-columns: auto auto;
    grid-column-gap: 10px;
  }
  @media ( max-width: 520px){
    grid-template-columns: auto;
    grid-column-gap: 10px;
  }
`;

const Projects = () => {
  return (
    <>
      <Main>
        <Title>Our Projects</Title>
        <div>
          <Heading>We Take A Project, We Execute It With Class</Heading>
          <Pages>
            <p>All</p>
            <p>Design</p>
            <p>Ios</p>
            <p>Web Application</p>
          </Pages>
        </div>
      </Main>
      <Cards>
        <Card
          image="https://iwebcode.design/wp-content/uploads/2020/03/anmol_Daily-Needz-400x380.png"
          title="Daily Needs"
          Tags={["Design", "Ios"]}
        />
        <Card
          image="https://iwebcode.design/wp-content/uploads/2020/03/ranky-new-400x380.png"
          title="Ranky.De"
          Tags={["Design", "Web Application"]}
        />
        <Card
          image="https://iwebcode.design/wp-content/uploads/2020/03/epic-new-400x380.png"
          title="Epic Digital Solutions"
          Tags={["Web Applicatioin"]}
        />
        <Card
          image="https://iwebcode.design/wp-content/uploads/2020/12/DreamNation-400x380.png"
          title="DreamNation"
          Tags={["Web Application"]}
        />
        <Card
          image="https://iwebcode.design/wp-content/uploads/2020/12/pcr-new-400x380.png"
          title="Pcr Consultants"
          Tags={["Design"]}
        />
        <Card
          image="https://iwebcode.design/wp-content/uploads/2020/12/hexkey-new-400x380.png"
          title="Hexkey Portfolio"
          Tags={["Web Application"]}
        />
      </Cards>
    </>
  );
};

export default Projects;
