import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Post from "../Post/post";
import SideBar from "../sideBar/sideBar";


const Center = styled.div`
  min-height: 230px;
  max-width: 1170px;
  .heading {
    font-size: 55px;
    line-height: 227px;
    letter-spacing: 1px;
    font-weight: bolder;
    padding-left: 13px;
  }
  @media ( max-width: 1010px){
      .center{
        display: flex;
        align-items: center;
        justify-content: center !important;

      }
  }
  @media (max-width: 968px) {
    padding: 0 20px;

  }
`;

export interface PostJson {
    id: number;
    publishedDate: Date;
    Description: string;
    Heading: string;
    Tags: string;
    Thumbnail: { url: string};
}
export interface PostJsonData {

}
const Posts = ( props: any) => {
  return (
    <section style={{ background: "#fff" }} className="py-5">
      <Center className="container">
        <div className="row center">
          <Post data={props}/>
          <SideBar data={props}/>
        </div>
      </Center>
    </section>
  );
};

export default Posts;
