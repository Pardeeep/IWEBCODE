import Image from "next/image";
import React from "react";
import { FaTags } from "react-icons/fa";
import styled from "styled-components";

const Car = styled.div`
  max-width: 340px;
  margin-bottom: 3rem;
  margin-left: 10px;
  padding: 10px;
  div{
      width: 360px;
      height: 340px;
  }
  h2 {
    margin: 1rem 0;
  }
  h2:hover {
    color: #8447ff;
  }
  @media( max-width: 1040px){
    div{
      width: 300px;
      height: 280px;
    }
  }

  @media (max-width: 800px) {
      div{
          width: 250px;
          height: 230px;
      }
  }
`;

const P = styled.p`
  font-size: 20px;
  word-spacing: 2;
  color: #78788b;
`;

const Card = (props: { image: string; title: string; Tags: string[] }) => {
  return (
    <Car className="col">
      <div>
        <Image src={props.image} alt="Image" width={380} height={360} />
      </div>
      <h2>{props.title}</h2>
      <P>
        {props.Tags.map((tag, index) => {
          return props.Tags.length - 1 === index ? tag : `${tag}  ,  `;
        })}
      </P>
    </Car>
  );
};

export default Card;
