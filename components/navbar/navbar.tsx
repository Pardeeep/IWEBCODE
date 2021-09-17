import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Logo = styled.div`
  @media (max-width: 568px) {
  }
`;

const Main = styled.section`
  font-weight: 500;
  max-width: 1170px;
  font-size: 18px;
  padding: 1.5rem 0 !important;
  margin-top: 10px;
  .max {
    max-width: 1170px;
  }
  @media (max-width: 1000px) {
    padding: 0 10px !important;
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
    padding: 5px 1.5rem !important;
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
    padding: 0 12px;
    background-color: #111111;
    overflow-x: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    transition: all 0.8s cubic-bezier(0.77, 0.2, 0.05, 1);
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
    font-weight: bolder !important;
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
    font-weight: lighter !important;
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
    padding-bottom: 0px !important;
  }
  .overlay .Address {
    width: 190px;
    padding-top: 15px;
    padding-bottom: 30px;
    font-size: 18px;
    color: #75758b;
  }
  .overlay .height {
    height: 47vw;
  }
  .overlay .Title {
    padding-bottom: 10px !important;
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
    .overlay .smallNav .lists .dropdown ul li a {
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
    font-size: 18px !important;
    font-weight: bold;
  }
  address p {
    line-height: 26px;
    margin-bottom: 5px !important;
    font-weight: lighter;
  }
  .addressIcon {
    font-size: 13px;
  }
  .overlay .lists a {
    font-weight: 500;
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
          <Logo className="col-auto pt-2 g-0">
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
              <ul className="d-flex justify-content-end align-items-center m-0 mb-1 list-inline">
                <li className={`nav-item d-none d-lg-block  mx-2`}>
                  <Link href="/" passHref>
                    <div className={styles.hover}>Home</div>
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-block  mx-2">
                  <Link href="about" passHref>
                    <div className={styles.hover}>About</div>
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-block ">
                  <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>
                      Services <FiChevronDown />
                    </button>
                    <ul className={styles.dropdownContent}>
                      <li className="li">
                        <Link href="/services/#design" passHref>
                          <div className={styles.Link}>Design</div>
                        </Link>
                      </li>
                      <li className="li">
                        <Link href="/services/#development" passHref>
                          <div className={styles.Link}>Development</div>
                        </Link>
                      </li>
                      <li className="li">
                        <Link href="/services/#online" passHref>
                          <div className={styles.Link}>Online Marketing</div>
                        </Link>
                      </li>
                      <li className="li">
                        <Link href="/services/#technology" passHref>
                          <div className={styles.Link}>Technology</div>
                        </Link>
                      </li>
                      <li className="li">
                        <Link href="/services/#content" passHref>
                          <div className={styles.Link}>Content Strategy</div>
                        </Link>
                      </li>{" "}
                    </ul>
                  </div>
                </li>
                <li className={` nav-item d-none d-lg-block mx-2`}>
                  <div className={styles.hover}>Case Studies</div>
                </li>
                <li className="nav-item d-none d-lg-block ">
                  <Link href="/blogs" passHref>
                    <div className={styles.hover}>Blogs</div>
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-block  mx-3 px-1">
                  <Link href="/contact-us" passHref>
                    <div className={styles.hover}>Contact</div>
                  </Link>
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
      <div
        className={
          show ? "row show overlay justify-content-center " : "overlay "
        }
      >
        <div className={styles.overlayMaxWidth}>
          <div className=" Container overlay-content">
            <div className="row p-5 m-3 mx-5 justify-content-between small ">
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

              <div className={`${styles.height} row justify-content-between`}>
                <div
                  className={`${styles.heightS} col-6 small d-flex align-items-center py-4 my-5`}
                >
                  <ul className="lists lcolor">
                    <li className="active">
                      <a href="https://iwebcode.design/" aria-current="page">
                        <div className={styles.homeButton}>Home</div>
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
                          <Link href="/services/#design">Design</Link>
                        </li>
                        <li className="">
                          <Link href="/services/#development">Development</Link>
                        </li>
                        <li className="">
                          <Link href="/services/#online">Online Marketing</Link>
                        </li>
                        <li className="">
                          <Link href="/services/#technology">Technology</Link>
                        </li>
                        <li className="">
                          <Link href="/services/#content">
                            Content Strategy
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="">
                      <a href="https://iwebcode.design/case-studies/">
                        Case Studies
                      </a>
                    </li>
                    <li className="active">
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li className="active">
                      <a href="https://iwebcode.design/contact/">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-4 small height">
                  <div
                    className={`${styles.heightS} d-flex flex-column text-white align-items-center justify-content-end `}
                  >
                    <address className="address  w-100">
                      <span className="Title">
                        We Are Available 24/ 7. Call Now.
                      </span>
                      <p className="paddingTop g-0">
                        <a className="tel p-0 g-0" href="tel:+919770024626">
                          <FaPhone className="addressIcon" /> (+91) 97700-24626
                        </a>
                        <a
                          className="tel p-0 g-0"
                          href="mailto:hello@iwebcode.design"
                        >
                          <FaEnvelope className="addressIcon" />
                          <br /> hello@iwebcode.design
                        </a>
                      </p>
                    </address>
                    <address className="address pb-3 w-100 ">
                      <span className="Title">Contact Information</span>
                      <p className="Address">
                        5th Floor, C-205, Phase 8B, Sector 74, Sahibzada Ajit
                        Singh Nagar, Punjab 140308
                      </p>
                    </address>
                  </div>
                </div>
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
                    <Link href="/services/#design">Design</Link>
                  </li>
                  <li className="">
                    <Link href="/services/#development">Development</Link>
                  </li>
                  <li className="">
                    <Link href="/services/#online">Online Marketing</Link>
                  </li>
                  <li className="">
                    <Link href="/services/#technology">Technology</Link>
                  </li>
                  <li className="">
                    <Link href="/services/#content">Content Strategy</Link>
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
