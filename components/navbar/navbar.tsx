import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";

const Logo = styled.div``;

const Main = styled.section`
  font-weight: 500;
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
    padding: 0 3rem !important;
    margin: 0 !important;
    background: rgba(250, 250, 250, 0.97);
    z-index: 50;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  }
  .overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
  }

  .overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }

  .overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  .overlay a:hover,
  .overlay a:focus {
    color: #f1f1f1;
  }

  .overlay .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
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
    width: 100%;
  }
`;

const Bar = styled.div``;
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
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
    <Main>
      <div
        className={`overflow:hidden py-5 container-fluid d-flex justify-content-between align-items-center`}
        id={navbar ? "Active" : "none"}
      >
        <Logo>
          <Image
            src="https://iwebcode.design/wp-content/uploads/2020/12/Logo-black-1-e1609682976969.png"
            alt="IWEBCODE"
            width="210"
            height="80"
            layout="intrinsic"
            className="custom-img"
          />
        </Logo>
        <nav className="navbar-nav d-none d-lg-block">
          <ul
            className={` list-group list-group-horizontal d-flex justify-content-evenly align-items-center`}
          >
            <li className={`${styles.link} ${styles.active}`}>Home</li>
            <li className={styles.link}>About</li>
            <li className={`${styles.link} `}>
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
            <li className={styles.link}>Case Studies</li>
            <li className={styles.link}>Blogs</li>
            <li className={styles.link}>Contact</li>
            <li className={styles.link}>
              <div onClick={handleClick} className={`${styles.bars} btn-dark`}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${styles.bars2} d-flex btn-dark`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={show ? "show overlay" : "overlay"}>
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </Main>
  );
};

export default Navbar;
