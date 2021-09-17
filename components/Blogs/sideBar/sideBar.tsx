import React from "react";
import Image from 'next/image'
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Form = styled.form`
    margin-bottom: 1rem;
    position: relative;
    input {
    height: 46px;
    border: 1px solid #d3d3d3;
    padding: 0 20px;
    color: #000248;
    padding-right: 65px;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    background: 0 0;
    box-shadow: none;
    outline: none;
    width: 100%:
    transition: all .4s ease-out 0s;
    &:focus{
        border: 1px solid #844ff7;
    }
  }
  button {
    position: absolute;
    left: 245px;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    padding: 0 5px;
    outline: none;
    border: none;
    background: none;
    margin: 0;
    border-left: 1px solid #d7d7d7;
    overflow: visible;
    max-width: 100%;
    vertical-align: baseline;
    .search{
        color:#757589;
    }
  }
`;

const Div = styled.div`
  padding-left: 2rem;
  .posts{
      max-width: 375px;
      justify-content: center;
  }
  ul{
    list-style: disc;
    padding-left: 20px;
  }
  ul li {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    color: #000248 ;
    &::marker {
      unicode-bidi: isolate;
      font-variant-numeric: tabular-nums;
      text-transform: none;
      text-indent: 0px !important;
      text-align: start !important;
      text-align-last: start !important;
    }
  }
  ul li a {
    transition: all 0.3s ease 0s;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    &:hover {
      color: #844ff7;
    }
  }
  .imgContainer{
      min-width: 100px;
      min-height: 80px;
      margin-right: 10px;
  }
  .detail{
      .h6{
          font-weight: bold;
      }
      .date{
          padding-right: 5px;
          border-right: 1px solid #d7d7d7;
      }
      p{
          display: inline;
          margin-left: 5px;
          color: #808080;
          opacity: 0.7;
          font-size: 13px;
      }
  }
  @media( max-width: 1030px){
    width: 70%;
  }
  @media (max-width: 968px) {
    width: 90%;
    padding: 0 20px;
  }
`;

const SideBar = (props: any) => {
    console.log( props.data.Post.posts );
  return (
    <Div className="col-lg-4">
      <Form action="">
        <input type="text" placeholder="Search ..." />
        <button>
          <FaSearch className="search" />
        </button>
      </Form>
      <h3>Recent Posts</h3>
      <ul>
        <li>
          <a href="#">Top Rated Seo Company In Mohali</a>
        </li>
        <li>
          <a href="#">Why Off Page Optimization is important for SEO</a>
        </li>
        <li>
          <a href="#">Difference between WordPress and Laravel</a>
        </li>
        <li>
          <a href="#">
            How much Cost Required To Build a Buisness Website in 2021
          </a>
        </li>
        <li>
          <a href="#">
            Ways to Improve Your Website - Website Development Company in Mohali
          </a>
        </li>
      </ul>
      <h3>Recent Posts</h3>
      { props.data.Post.posts.map(( Data:any ) => <div className="posts d-flex justify-content-between my-3" key={Data.id}>
            <div className="imgContainer">
                <Image width={100} height={80} src={`http://localhost:1337${Data.Thumbnail.url}`} alt="iconImg"/>
            </div>
            <div className="detail">
                <div className="h6">{Data.Heading}</div>
                <p className="date">{Data.publishedDate}</p>
                <p>5 min read</p>
            </div>
          </div>)}
    </Div>
  );
};

export default SideBar;
