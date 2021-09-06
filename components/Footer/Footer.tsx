import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import styled from "styled-components";
import Image from "next/image";
import { BsFillCaretRightFill } from "react-icons/bs";

const Main = styled.section`
  min-height: 100vh;
  overflow: hidden;
  .hr {
    margin-top: 3rem;
  }
`;

const Icons = styled.div`
  height: 30vh;
  .icon {
    margin: 0 2.5rem;
    font-size: 30px;
    color: #999ab6;
    cursor: pointer;
  }
  .icon:hover {
    color: #844ff7;
  }
  @media (max-width: 968px) {
    .icons {
      margin: 0 1rem;
    }
  }
`;

const Subscribe = styled.div`
  border-right: 1px solid #c7c7d5;
  padding-bottom: 2rem;
  @media (max-width: 968px) {
    margin-bottom: 3rem;
  }
`;

const Detail = styled.p`
  color: #7d7d90;
  margin: 3rem 0;
  font-size: 18px;
`;
const Form = styled.form`
  display: flex;
  @media (max-width: 1040px) {
    flex-wrap: wrap;
  }
`;

const Button = styled.div`
  border: 2px solid #844ff7;
  padding: 10px 35px;
  color: #844ff7;
  &:hover {
    color: white;
    background: #844ff7;
  }
`;

const Input = styled.input`
  width: 200px;
  outline: none;
  border: none;
  border-bottom: 2px solid #7d7d90;
  color: #7d7d90;
  padding: 8px 0;
  font-size: 17px;
  margin-right: 2rem;
  &:focus {
    border-color: #844ff7;
  }
  @media (max-width: 1040px) {
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  padding: 0 4rem;
  @media (max-width: 968px) {
    flex-wrap: wrap;
  }
`;
const Services = styled.div`
  h4 {
    padding-bottom: 1rem;
  }
  ul {
    list-style: none;
    padding: 0;
    font-size: 18px;
  }
  ul li {
    color: #7d7d90;
    cursor: pointer;

    margin-bottom: 1rem;
  }
  ulli: hover {
    color: #844ff7;
  }
`;

const Copyright = styled.div`
  color: #7a7a90;
  a {
    margin-right: 20px;
  }
  a:hover {
    text-decoration: underline;
    color: #844ff7;
  }
`;
const Footer = () => {
  return (
    <Main className="containerd-fluid">
      <Icons className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedinIn className="icon" />
          <FaInstagram className="icon" />
        </div>
      </Icons>
      <Content className="row">
        <Subscribe className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="imgContainer">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/12/Logo-black-300x109.png"
              width={300}
              height={109}
              alt="companyLogo"
            />
          </div>
          <Detail>
            IWEBCODE is a versatile design agency that visualizes your thinking
            and also creates a delightful experience.
          </Detail>
          <Form>
            <Input type="text" placeholder="Email" />
            <Button>
              Subscribe <BsFillCaretRightFill className="spacing" />
            </Button>
          </Form>
        </Subscribe>

        <Services className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--5">
          <h4>Services</h4>
          <ul>
            <li>Logo & Branding</li>
            <li>Website Development</li>
            <li>Mobile App Development</li>
            <li>Search Engine Optimization</li>
            <li>Pay-Per-Click</li>
            <li>Social Media Marketing</li>
          </ul>
        </Services>
        <Services className="resource col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--5 mt_md--5 mt_sm--5">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Case Study</li>
          </ul>
        </Services>
        <Services className="support col-xl-1 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--5 mt_md--5 mt_sm--5">
          <h4>Support</h4>
          <ul>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </Services>
      </Content>
      <Copyright className="row d-flex justify-content-between">
        <hr className="row hr" />
        <div className="row">
          <p className="col">© 2020, Built with pride and caffeine.</p>
          <div className="col d-flex justify-content-end">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </Copyright>
    </Main>
  );
};

export default Footer;
