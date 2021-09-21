import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Center = styled.div`
  max-width: 1170px;
  padding: 3rem 0;
  text-align: center;
  .heading {
    font-size: 50px;
    line-height: 68px;
    margin-bottom: 20px;
    font-weight: 700;
    padding: 0;
  }
  p {
    color: #757589;
    padding-right: 30px;
    font-size: 24px;
    line-height: 38px;
    width: 70%;
  }
  @media( max-width: 968px){
      padding: 3rem 10px;
      .heading{
          font-size: 30px;
          line-height: 20px;
      }
    p{
        width: 100%;
    }
  }
`;

const Box = styled.div`
  height: 280px;
  width: 280px;
  position: relative;
  z-index: 2;
  padding: 10px;
  text-align: center;
  margin: 10px;
  box-shadow: -52px 52px 70px -30px rgb(0 0 0 / 10%);
  .colorh{
    color: #000248;
  }
  p {
    padding: 0;
    width: 100%;
  }
`;

const Results = () => {
  return (
    <section className="container-fluid d-flex justify-content-center">
      <Center>
        <div className="row justify-content-center">
          <h1 className="heading">See The Results</h1>
          <p>
            In vel varius turpis, non dictum sem. Aenean in efficitur ipsum, in
            egestas ipsum. Mauris in mi ac tellus.
          </p>
        </div>
        <div className="row py-5 d-flex flex-wrap justify-content-center align-items-center">
          <Box className="d-flex flex-column justify-content-center align-items-center">
            <div className="imgContainer">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2020/03/shape-01.png"
                layout="intrinsic"
                width={28}
                height={36}
                alt="icon"
              />
            </div>
            <h1 className="heading colorh">7+</h1>
            <p>In total investments</p>
          </Box>
          <Box className="d-flex flex-column justify-content-center align-items-center">
            <div className="imgContainer">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2020/03/shape-02.png"
                layout="intrinsic"
                width={40}
                height={28}
                alt="icon"
              />
            </div>
            <h1 className="heading colorh">198+</h1>
            <p>Investors a day</p>
          </Box>
          <Box className="d-flex flex-column justify-content-center align-items-center">
            <div className="imgContainer">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2020/03/shape-01.png"
                layout="intrinsic"
                width={40}
                height={24}
                alt="icon"
              />
            </div>
            <h1 className="heading colorh">318+</h1>
            <p>Average monthaly invesments a day</p>
          </Box>
        </div>
      </Center>
    </section>
  );
};

export default Results;
