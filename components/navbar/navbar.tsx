import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import {
  FaArrowDown,
  FaChevronDown,
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaPhoneAlt,
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
    width: 100vw;
    position: fixed;
    z-index: 100;
    margin: 0;
    top: 0;
    right: -102vw;
    bottom: 0;
    background-color: #111111;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    transition: all .8s cubic-bezier(0.77,.2,.05,1);
  }

  .overlay::-webkit-scrollbar {
    display: none;
  }

  .overlay-content {
  }

  .overlay a {
    padding: 8px;
    padding-bottom: 20px;
    text-decoration: none;
    font-size: 40px;

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
    line-height: 0px;
    font-weight: lighter;
    color: white;
    padding: 0px @important;
    margin: 0 !important;
    margin-bottom: 20px !important;
    padding-right: 17px;
    padding-left: 50px;
  }

  .show {
    right: 0;
    bottom: 0;
  }
  @keyframes shown{
      0% {
        transition:0.8s;
        right: -80vw;
      }
      15%{
        transition: 0.3s;
      }

      100% {
        transition: 0.1s;
      }
  }
  .nav-item {
    cursor: pointer;
  }
  .overlay .lists {
    list-style: none;
    padding-top: 18px;
    letter-spacing: 2px;
    padding-left: 53px;
  }
  .icons {
    color: #75758b;
    margin-bottom: 16px;
    margin-right: 7px;
    margin-left: 3px;
    cursor: pointer;
    font-size: 18px;
    &:hover {
      color: #844ff7;
    }
  }

  .overlay .tel {
    font-size: 18px;
    padding: 0 !important;
    color: #75758b;
  }

  .overlay .paddingTop {
    padding-top: 15px !important;
  }

  .overlay .Address {
    width: 190px;
    padding-top: 20px;
    padding-bottom: 30px;
    color: #75758b;
  }
  .overlay .height {
    height: 47vw;
  }
  .overlay .Title {
    padding-bottom: 30px !important;
  }
  .smallNav {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: -450px;
    overflow-y: auto;
    left: 0;
    width: 400px;
    transition: 0.9s;
  }
  .overlay .services {
    width: 250px !important;
  }
  @media screen and (max-width: 900px) {
    .overlay {
      left: -102vw;
      right: 0;
    }
    .show {
      left: 0;
    }

    padding: 1rem 10px !important;
    .overlay {
      background: rgba(0, 0, 0, 0.9);
      padding: 0 !important;
      margin: 0 !important;
    }
    .overlay .small {
      display: none;
    }

    .overlay .smallNav {
      display: block;
    }

    .overlay .smallBtn {
      postiton: relative;
      top: 50px;
      right: 50px;
      color: black !important;
    }

    .overlay .smallNav .lists {
      padding: 0 30px;
    }
    .overlay .smallNav .lists li a {
      color: black !important;
      font-size: 18px;
      margin: 0px !important;
      font-weight: lighter;
      &:hover {
        color: #844ff7;
      }
    }
    .overlay .smallNav .lists .dropdown ul li a{
        font-size: 16px;
    }
  }
  .overlay .ListStyle {
    list-style: none;
    transition: 0.9s;
  }

  .overlay .ListStyle li a {
    font-size: 20px;
    color: #75758b;
  }
  address .Title {
    font-size: 20px !important;
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
        <div className="row max justify-content-between align-items-center">
          <Logo className="col-auto g-0">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/12/Logo-black-1-e1609682976969.png"
              alt="IWEBCODE"
              width="220"
              height="80"
              layout="intrinsic"
              className="custom-img"
            />
          </Logo>
          <div className="col-auto g-0">
            <nav className="d-lg-block g-0">
              <ul className="d-flex justify-content-end align-items-center m-0 list-inline">
                <li
                  className={`${styles.active} nav-item d-none d-lg-block  mx-3`}
                >
                  Home
                </li>
                <li className="nav-item d-none d-lg-block  mx-3">About</li>
                <li className="nav-item d-none d-lg-block ">
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
                <li className={` nav-item d-none d-lg-block mx-3`}>
                  Case Studies
                </li>
                <li className="nav-item d-none d-lg-block ">Blogs</li>
                <li className="nav-item d-none d-lg-block  mx-3 px-4">
                  Contact
                </li>
                <li className="nav-item  mx-0">
                  <div
                    onClick={handleClick}
                    className={`${styles.bars} nav-item`}
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
          <div className="row p-5 m-3 mx-5 justify-content-between small">
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
                <li className="px-1">
                  <FaFacebookF className="icons" />
                </li>
                <li className="px-1">
                  <FaTwitter className="icons" />
                </li>
                <li className="px-1">
                  <FaLinkedinIn className="icons" />
                </li>
                <li className="px-1">
                  <FaInstagram className="icons" />
                </li>
                <li className="px-1">
                  <a href="#" className="closebtn" onClick={handleClick}>
                    &times;
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center align-items-center mb-5">
            <div className="col-6 small py-4 ">
              <ul className="lists lcolor">
                <li className="active">
                  <a href="https://iwebcode.design/" aria-current="page" style={{color:"#844ff7", left: "-40px", position: "relative"}}>
                    - Home
                  </a>
                </li>
                <li className="active">
                  <a href="https://iwebcode.design/about-us/">About</a>
                </li>
                <li className="active">
                  <a href="#" onClick={handleId}>
                    Services{" "}
                    <FaChevronDown
                      style={{ fontSize: "18px", color: "#75758B" }}
                    />
                  </a>
                  <ul className={id ? "d-block ListStyle" : "d-none"}>
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
            <div className="col-4 small height">
              <div className="d-flex flex-column text-white align-items-center justify-content-end h-100">
                <address className="address w-100">
                  <span className="Title">
                    We are available 24/ 7. Call Now.
                  </span>
                  <p className="paddingTop">
                    <a className="tel" href="tel:+919770024626">
                      <FaPhone /> (+91) 97700-24626
                    </a>
                    <a className="tel" href="mailto:hello@iwebcode.design">
                      <FaEnvelope />
                      <br /> hello@iwebcode.design
                    </a>
                  </p>
                </address>
                <address className="address w-100">
                  <span className="Title">
                    Contact information
                  </span>
                  <p className="Address">
                    5th Floor, C-205, Phase 8B, Sector 74, Sahibzada Ajit Singh
                    Nagar, Punjab 140308
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className={show ? "bg-light smallNav show" : "d-none"}>
          <div className="row justify-content-between">
            <Logo
              className="col-7
            p-2 justify-content-start g-0 "
            >
              <Image
                src="https://iwebcode.design/wp-content/uploads/2020/12/Logo-black-1-e1609682976969.png"
                alt="IWEBCODE"
                width="280"
                height="100"
                layout="intrinsic"
                className="custom-img"
              />
            </Logo>
            <a href="#" className="col-2 h-10 smallBtn" onClick={handleClick}>
              &times;
            </a>
          </div>
          <div className="row">
            <ul className="lists text-dark lcolor">
              <li className="active">
                <a href="https://iwebcode.design/" aria-current="page">
                  Home
                </a>
              </li>
              <li className="active">
                <a href="https://iwebcode.design/about-us/">About</a>
              </li>
              <li className="active dropdown">
                <a href="#" onClick={handleId}>
                  Services{" "}
                  <FaChevronDown
                    style={{ fontSize: "18px", color: "#75758B" }}
                  />
                </a>
                <ul
                  className={id ? "d-block" : "d-none"}
                  style={{ listStyle: "none" }}
                >
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
                <a href="https://iwebcode.design/case-studies/">Case Studies</a>
              </li>
              <li className="active">
                <a href="https://iwebcode.design/blog/">Blogs</a>
              </li>
              <li className="active">
                <a href="https://iwebcode.design/contact/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Navbar;
