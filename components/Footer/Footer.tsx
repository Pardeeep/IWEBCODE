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
  margin: 0 3rem;
  .hr{
    margin-top: 3rem;
  }
`;

const Icons = styled.div`
  height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    margin: 0 2.5rem;
    font-size: 30px;
    color: #999ab6;
    cursor: pointer;
  }
  .icon:hover {
    color: #844ff7;
  }
  @media(max-width:968px){
    .icons{
      margin: 0 1rem;
    }
  }
`;

const Subscribe = styled.div`
  width: 45%;
  border-right: 1px solid #c7c7d5;
  @media(max-width: 968px){
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const Detail = styled.p`
  color: #7d7d90;
  margin: 4rem 0;
  font-size: 18px;
  width: 80%;
`;
const Form = styled.form`
  display: flex;
  @media(max-width: 1040px){
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
  @media(max-width: 1040px){
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  @media (max-width: 968px){
    flex-wrap: wrap;
  }
`
const Services = styled.div`
  width: 330px;
  padding-left: 4rem;
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

const Links = styled.div`
  display: flex;
  .resource {
    width: fit-content;
  }
  .support {
    width: fit-content;
  }
  @media(max-width: 1040px){
    flex-wrap: wrap;
  }
`;

const Copyright = styled.div`
  color: #7a7a90;
  margin:  0;
  a{
    margin-left: 20px;
  }
  a:hover{
    text-decoration:underline;
    color: #844ff7;
  }
`;
const Footer = () => {
  return (
    <Main>
      <Icons>
        <FaFacebookF className="icon" />
        <FaTwitter className="icon" />
        <FaLinkedinIn className="icon" />
        <FaInstagram className="icon" />
      </Icons>
      <Content className="d-flex">
        <Subscribe>
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
        <Links>
          <Services>
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
          <Services className="resource">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Case Study</li>
            </ul>
          </Services>
          <Services className="support">
            <h4>Support</h4>
            <ul>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </Services>
        </Links>
      </Content>
      <hr className="hr" />
      <Copyright className="d-flex justify-content-between">

        <p>© 2020, Built with pride and caffeine.</p>
        <div>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </Copyright>
    </Main>
  );
};

export default Footer;
