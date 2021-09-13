import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Main = styled.section`
  min-height: 400px;
  display: flex;
  max-width: 1170px;
  padding: 4rem;
  justify-content: center;
  @media (max-width: 968px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .details {
      width: 100%;
      display: grid;
      place-items: center;
    }
  }
`;

const Title = styled.p`
  background: #fff3ee;
  color: #ff9970;
  padding: 5px;
  text-align: center;
  width: fit-content;
`;

const Heading = styled.h1`
  margin: 1.3rem 0;
  line-height: 60px;
  font-size: 45px;
  font-weight: 600;
  @media (max-width: 968px) {
    text-align: center;
  }
  @media (max-width: 800px) {
    margin: 1rem 0;
    width: 100%;
    text-align: center;
  }
`;

const Subheading = styled.p`
  color: #858597;
  width: 80%;
  font-size: 20px;
  @media (max-width: 968px) {
    width: 100%;
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background: #e5e5e5;
  padding: 0;
  gap: 1px;
  div:hover {
    transform: scale(1.05);
  }
  @media (max-width: 968px) {
    width: 100%;
    margin-top: 2rem;
    height: 250px;
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
    <Main className="container-fluid">
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-12 col-12">
          <div className=" details">
            <Title>Top Clients</Title>
            <Heading>Our Services And Products For Clients</Heading>
            <Subheading>
              Having lot of projects in portfolio, IWEBCODE is one of the top
              most IT Company offering the best services to Multinational Brands
            </Subheading>
          </div>
        </div>
        <Grid className="col-xl-8 col-lg-8 mt_md--20 mt_sm--20">
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
      </div>
    </Main>
  );
};

export default Clients;
