import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Logo = styled.div``;

const Main = styled.section`
  font-weight: 500;
  max-width: 1170px;
  font-size: 18px;
  padding: 1.5rem 0 !important;
  margin-top: 10px;
  .max {
    max-width: 1170px;
  }
  @media screen and (max-width: 768px) {
    .Active {
      flex-direction: column;
      align-items: flex-start;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      color: black;
      padding: 0 !important;
      margin: 0 !important;
    }
  }
  #Active {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-weight: 500 !important;
    padding: 5px 3.5rem !important;
    margin: 0 !important;
    background: rgba(250, 250, 250, 0.4);
    backdrop-filter: blur(15px);
    z-index: 50;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  }
  .overlay {
    min-height: 100vh;
    width: 0;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    overflow-x: hidden;
    transition: 0.5s;
  }

  .overlay-content {
  }

  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: white;
    display: block;
    transition: 0.3s;
  }

  .overlay a:hover,
  .overlay a:focus {
    color: #844ff7;
  }

  .overlay .closebtn {
    font-size: 50px;
    font-weight: lighter;
    color: white;
    padding-right: 25px;
    padding-left: 55px;
  }

  @media screen and (max-height: 450px) {
    .overlay a {
      font-size: 20px;
    }
    .overlay .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
  .show {
    width: 100vw;
    bottom: 0;
    right: 0;
  }
  .nav-item {
    cursor: pointer;
  }
  .overlay .lists {
    list-style: none;
  }
`;

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const handleId = () => {
    setId(!id);
  };
  const listenScrollEvent = () => {
    if (window.scrollY > 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <Main className="container-fluid px-2">
      <div
        className={`row align-items-center justify-content-center`}
        id={navbar ? "Active" : "none"}
      >
        <div className="row max justify-content-center align-items-center">
          <Logo className="col-3 g-0">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/12/Logo-black-1-e1609682976969.png"
              alt="IWEBCODE"
              width="220"
              height="80"
              layout="intrinsic"
              className="custom-img"
            />
          </Logo>
          <div className="col-9 g-0">
            <nav className=" d-none d-lg-block g-0">
              <ul className="d-flex justify-content-end align-items-center m-0 list-inline">
                <li className={`${styles.active} nav-item mx-3`}>Home</li>
                <li className="nav-item mx-3">About</li>
                <li className="nav-item mx-2">
                  <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>
                      Services <FiChevronDown />
                    </button>
                    <ul className={styles.dropdownContent}>
                      <li className="li">Design</li>
                      <li className="li">Development</li>
                      <li className="li">Online Marketing</li>
                      <li className="li">Technology</li>
                      <li className="li">Content Strategy</li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mx-3">Case Studies</li>
                <li className="nav-item">Blogs</li>
                <li className="nav-item mx-3 px-4">Contact</li>
                <li className="nav-item mx-0">
                  <div
                    onClick={handleClick}
                    className={`${styles.bars} nav-item btn-dark`}
                  >
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={show ? "row show overlay " : "overlay"}>
        <div className=" Container overlay-content">
          <div className="row p-5 m-3 mx-5 justify-content-between">
            <Logo className="col-3 mx-4  justify-content-start g-0 ">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2020/12/logo-white.png"
                alt="IWEBCODE"
                width="280"
                height="100"
                layout="intrinsic"
                className="custom-img"
              />
            </Logo>
            <div className="col-6 g-0">
              <ul className="lists d-flex justify-content-end align-items-center h-100">
                <li className="px-2">
                  <FaFacebookF style={{ color: "white" }} />
                </li>
                <li className="px-2">
                  <FaTwitter style={{ color: "white" }} />
                </li>
                <li className="px-2">
                  <FaLinkedinIn style={{ color: "white" }} />
                </li>
                <li className="px-2">
                  <FaInstagram style={{ color: "white" }} />
                </li>
                <li className="px-2">
                  <a href="#" className="closebtn" onClick={handleClick}>
                    &times;
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center h-100">
            <div className="col-6 ">
              <ul className="lists">
                <li className="active">
                  <a href="https://iwebcode.design/" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="active">
                  <a href="https://iwebcode.design/about-us/">About</a>
                </li>
                <li className="active">
                  <a href="#" onClick={handleId}>
                    Services
                  </a>
                  <ul className={id ? "d-block" : "d-none"}>
                    <li className="">
                      <a href="https://iwebcode.design/services/#design">
                        Design
                      </a>
                    </li>
                    <li className="">
                      <a href="https://iwebcode.design/services/#development">
                        Development
                      </a>
                    </li>
                    <li className="">
                      <a href="https://iwebcode.design/services/#onlinemarketing">
                        Online Marketing
                      </a>
                    </li>
                    <li className="">
                      <a href="https://iwebcode.design/services/#technology">
                        Technology
                      </a>
                    </li>
                    <li className="">
                      <a href="https://iwebcode.design/services/#content-strategy">
                        Content Strategy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a href="https://iwebcode.design/case-studies/">
                    Case Studies
                  </a>
                </li>
                <li className="active">
                  <a href="https://iwebcode.design/blog/">Blogs</a>
                </li>
                <li className="active">
                  <a href="https://iwebcode.design/contact/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <div className="d-flex flex-column text-white align-items-end justify-content-end h-100">
                <address className="address">
                  <span className="title">
                    We are available 24/ 7. Call Now.
                  </span>
                  <p>
                    <a className="tel" href="tel:+919770024626">
                      <i className="fas fa-phone"></i>(+91) 97700-24626
                    </a>
                  </p>
                  <p>
                    <a className="tel" href="mailto:hello@iwebcode.design">
                      <i className="fas fa-envelope"></i>hello@iwebcode.design
                    </a>
                  </p>
                </address>
                <address className="address">
                  <span className="title"> Contact information </span>
                  <p className="m-b-xs-30 mid grey-dark-three">
                    5th Floor, C-205, Phase 8B, Sector 74, Sahibzada Ajit Singh
                    Nagar, Punjab 140308
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Navbar;
