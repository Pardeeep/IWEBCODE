import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Main = styled.section`
  padding: 4rem;
  min-height: 50vh;
  display: flex;
  justify-content: flex-start;

  .details {
    width: 40%;
  }
`;

const Title = styled.p`
  background: #fff3ee;
  color: #ff9970;
  padding: 5px;
  width: 120px;
  text-align: center;
`;

const Heading = styled.h1`
  margin: 1.3rem 0;
  line-height: 60px;
  font-size: 45px;
  font-weight: 600;
  width: 70%;
  @media (max-width: 800px) {
    margin: 1rem 0;
    width: 100%;
  }
`;

const Subheading = styled.p`
  color: #858597;
  width: 80%;
  font-size: 20px;
`;

const Grid = styled.p`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 60%;
  background: #e5e5e5;
  gap: 1px;

  div:hover{
      transform: scale(1.05);
  }
  @media (max-width: 800px) {
    grid-template-columns: auto auto;
    width: 100%;
  }
  @media (max-width: 520px) {
    grid-template-columns: auto;
    width: 100%;
  }
`;

const GridItem = styled.div`
  background: white;
  display: grid;
  place-items: center;
`;
const Clients = () => {
  return (
    <Main>
      <div className="details">
        <Title>Top Clients</Title>
        <Heading>Our Services And Products For Clients</Heading>
        <Subheading>
          Having lot of projects in portfolio, IWEBCODE is one of the top most
          IT Company offering the best services to Multinational Brands
        </Subheading>
      </div>
      <Grid>
        <GridItem>
          <div>
            <Image
              src="https://iwebcode.design/wp-content/uploads/2021/01/Artboard-1.png"
              width={121}
              height={49}
              alt="CompanyImage"
            />
          </div>
        </GridItem>
        <GridItem>
          <div>
            <Image
              src="https://iwebcode.design/wp-content/uploads/2021/01/Artboard-1-copy.png"
              width={121}
              height={49}
              alt="CompanyImage"
            />
          </div>
        </GridItem>
        <GridItem>
          <div>
            <Image
              src="https://iwebcode.design/wp-content/uploads/2021/01/Artboard-1-copy-5.png"
              width={121}
              height={49}
              alt="CompanyImage"
            />
          </div>
        </GridItem>
        <GridItem>
          <div>
            <Image
              src="https://iwebcode.design/wp-content/uploads/2021/01/Artboard-1-copy-4.png"
              width={121}
              height={49}
              alt="CompanyImage"
            />
          </div>
        </GridItem>
        <GridItem>
          <div>
            <Image
              src="https://iwebcode.design/wp-content/uploads/2021/01/Artboard-1-copy-3.png"
              width={121}
              height={49}
              alt="CompanyImage"
            />
          </div>
        </GridItem>
        <GridItem>
          <div>
            <Image
              src="https://iwebcode.design/wp-content/uploads/2021/01/Artboard-1-copy-2.png"
              width={121}
              height={49}
              alt="CompanyImage"
            />
          </div>
        </GridItem>
      </Grid>
    </Main>
  );
};

export default Clients;
