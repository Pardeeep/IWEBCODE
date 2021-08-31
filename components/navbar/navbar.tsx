import  Image  from 'next/image'
import styles from "../../styles/Home.module.css";
import { FiChevronDown } from "react-icons/fi";
import styled from 'styled-components';

const Logo = styled.div``

const Navbar = () => {
  return (
    <div
      className={`${styles.Navbar} d-flex justify-content-between align-items-center`}
    >
      <Logo>
        <Image
          src="https://iwebcode.design/wp-content/uploads/2020/12/Logo-black-1-e1609682976969.png"
          alt="IWEBCODE"
          width="220" height="80" layout="intrinsic"
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
      </nav>
    </div>
  );
};

export default Navbar;
