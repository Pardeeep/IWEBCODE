import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from 'next/link'
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const Column = styled.div`
  max-width: 1170px;
  .head {
    letter-spacing: 1px;
    font-weight: bolder;
  }
  p {
    font-size: 15px;
    border-right: 1px solid #757589;
    margin-right: 10px;
    padding-right: 10px;
    line-height: 1.5;
    color: #757589;
  }
  @media (max-width: 1030px) {
    width: 70%;
  }
  @media (max-width: 968px) {
    width: 90%;
    padding: 0 20px;
  }
  @media (max-width: 700px) {
    p {
      border-right: 0px;
    }
  }
`;

const Button = styled.button`
  padding: 12px 25px;
  border: 2px solid #844ff7;
  outline: none;
  color: #844ff7;
  font-weight: bold;
  background: none;
  &:focus{
    outline: none;
  }
  .spacing {
    margin-left: 10px;
  }
  &:hover {
    color: white;
    background: #844ff7;
  }
`;

const Paragraph = styled.p`
  padding: 0 !important;
  margin: 0 !important;
  border-right: 0px !important;
  font-size: 20px !important;
  line-height: 32px !important;
  margin-bottom: 40px !important;
`;

const Post = (props: any) => {
  return (
    <Column className="col-lg-8 g-0 px-1">
      <div className="container-fluid">
        {props.data.Post.posts.map((Data: any) => (
          <div className="row mb-5" key={Data.id}>
            <h2 className="head pb-2">{Data.Heading}</h2>
            <div className="container">
              <div className="d-flex">
                <div className="">
                  <Image
                    width={50}
                    height={50}
                    src="https://iwebcode.design/wp-content/uploads/2020/12/fav-50x50.png"
                    alt="CompIcon"
                  />
                </div>
                <div className="pb-4 px-4">
                  <h3>admin</h3>
                  <div className="d-flex">
                    <p className="date">September 8, 2021</p>
                    <p className="time">5 min read</p>
                    <p className="tag">Online Marketing</p>
                  </div>
                  <p className="tags">
                    Digital Marketing Company In Chandigarh, SEO Company in
                    Mohali
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="imgContainer">
                  <Image
                    layout="intrinsic"
                    width={813}
                    height={431}
                    src={`https://iwebcodestrapi.herokuapp.com${Data.Thumbnail.url}`}
                    alt="Image"
                  />
                </div>
              </div>
              <Paragraph className="row w-100 g-0">
                Introduction In this 21st century, A New World of the web is
                here. Almost the whole world is working online as they run
                plenty of businesses online by following a bunch of rules. These
                days all online businesses are mostly conducted through various
                dimensions. There are few hurdles that a websites need to pass
                to […]
              </Paragraph>
              <Link href={`/blog/${Data.id}`} passHref>
                <Button className="g-0">
                  Read More <BsCaretRightFill className="spacing" />{" "}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Column>
  );
};

export default Post;
