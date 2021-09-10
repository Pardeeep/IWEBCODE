import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import styled from "styled-components";


const Main = styled.div`
    max-width: 1280px;
    width: 1280px;
`
const Wrapper = styled.div`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 70px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }
  ul li Link {
  }
  .link {
    cursor: pointer;
    padding: 24px 16px;
    &:hover {
      color: #844ff7 !important;
    }
  }
`;

const Navbar2 = () => {
  return (
    <section className="container-fluid d-flex justify-content-center bg-dark">
      <Main className="row bg-warning w-100 justify-content-between">
        <div className="col-lg-3 col-md-6 col-sm-6 col-8 header-left">
          <Link href="/" passHref>
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/12/Logo-black-1-e1609682976969.png"
              alt="IWEBCODE"
              width="220"
              height="80"
              layout="intrinsic"
              className="custom-img"
            />
          </Link>
        </div>
        <div className="col-lg-9 col-md-6 col-sm-6 col-4 header-right">
          <Wrapper>
            <ul>
              <li>
                <Link href="/" passHref>
                  <div className="link">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <div className="link">About</div>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <div className="link">Services</div>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <div className="link">Case Studies</div>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <div className="link">Blogs</div>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <div className="link">Contact</div>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <div className="link">
                    <div className={styles.bars}>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </Wrapper>
        </div>
      </Main>
    </section>
  );
};

export default Navbar2;
