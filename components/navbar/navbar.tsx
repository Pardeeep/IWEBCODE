import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";

const Logo = styled.div``;

const Main = styled.section`
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
    padding:0 !important;
    margin: 0!important;
  }
}
#Active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 4rem;
  background: rgba(250,250,250,0.97);
  z-index: 50;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
  @media{
    padding: 0 20px;
  }
`;

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
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
        className={`${styles.Navbar} d-flex justify-content-between align-items-center`}
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
        <nav>
          <ul
            className={`${styles.links} list-group list-group-horizontal d-flex justify-content-evenly align-items-center`}
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
              <div className={`${styles.bars} btn-dark`}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </li>
          </ul>
          <div className={`${styles.bars} ${styles.bars2} btn-dark`}>
                <div></div>
                <div></div>
                <div></div>
              </div>
        </nav>
      </div>
    </Main>
  );
};

export default Navbar;
