import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  FaAd,
  FaAppStore,
  FaCode,
  FaDatabase,
  FaDiceD20,
  FaEye,
  FaFacebookF,
  FaFolderOpen,
  FaHammer,
  FaHubspot,
  FaMailBulk,
  FaMobileAlt,
  FaMousePointer,
  FaOpencart,
  FaPaperPlane,
  FaPrint,
  FaReact,
  FaSearch,
  FaServer,
  FaVideo,
  FaWix,
  FaWordpressSimple,
} from "react-icons/fa";

const CardBox = styled.section`
  max-width: 1170px;
  margin: 5rem 0;
`;
// box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
const Card = styled.div`
  &:hover {
    background: #fff;
    box-shadow: -52px 52px 70px -30px rgb(0 0 0 / 10%);
  }
  max-width: 360px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 2rem 0;
  padding-right: 37px;
  padding-left: 38px;
  z-index: 0;
  .imgContainer {
    position: relative;
    height: 100px;
    width: 120px;
    left: 30px;
  }
  .imgContainer::before {
    background: linear-gradient(180deg, #ebfffd 0, #efeefa 100%);
    position: absolute;
    content: "";
    right: 33%;
    top: -15%;
    height: 90px;
    width: 80px;
    z-index: -4;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    transform: rotateY(-7deg);
    box-shadow: 0 0 1px transparent;
  }
  .icon-inner {
    position: relative;
    width: 62px;
    height: 62px;
    text-align: center;
    line-height: 58px;
    border-radius: 100%;
    left: -5px;
  }
  #c1{
    background: #9459F5 ;
  }
  #c2{
    background: #7DD6B2 ;
  }
  #c3{
    background: #29D7FF ;
  }
  #c4{
    background: #FFC107 ;
  }
  #c5{
    background: #007AFF ;
  }
  #c6{
    background: #22D5FF ;
  }
  .image {
    position: absolute;
    top: 15px;
    left: 14px;
    font-size: 30px;
    color: white;
    z-index: 10;
  }
  .violet {
    color: #844ff7;
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    background: #f6f6f7;
  }
  @media (max-width: 768px) {
    width: 200px;
    background: #f6f6f7;
  }
`;
const Title = styled.h4`
  margin: 14px 0;
  margin-top: 25px;
  text-transform: capitalize;
  width: 100%;
  font-size: 28px;
  font-weight: bolder;
  line-height: 32px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: #757589;
  .bigger {
    font-weight: bold;
    color: #555555;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

interface card {
  src1: string;
  alt: string;
  title: string;
  description: string;
  icon: string;
  iconC: string;
}

export const Cards = (props: { cards: card[] }) => {
  return (
    <>
      <CardBox className="row justify-content-start align-items-start mx-auto">
        {props.cards.map((card, index) => (
          <Card className="col-lg-4" key={index}>
            <div className="icon">
              <div className="icon-inner" id={card.iconC}>
                <div className="image-2">
                  <FaEye className={card.icon === "eye" ? `image` : "d-none"} />
                  <FaPaperPlane
                    className={card.icon === "plane" ? `image` : "d-none"}
                  />
                  <FaCode
                    className={card.icon === "code" ? `image` : "d-none"}
                  />
                  <FaPrint
                    className={card.icon === "print" ? `image` : "d-none"}
                  />
                  <FaVideo
                    className={card.icon === "video" ? `image` : "d-none"}
                  />
                  <FaMobileAlt
                    className={card.icon === "mobile" ? `image` : "d-none"}
                  />
                  <FaWordpressSimple
                    className={card.icon === "wordpress" ? `image` : "d-none"}
                  />
                  <FaAppStore
                    className={card.icon === "appStore" ? `image` : "d-none"}
                  />
                  <FaReact
                    className={card.icon === "react" ? `image` : "d-none"}
                  />
                  <FaWix className={card.icon === "wix" ? `image` : "d-none"} />
                  <FaHubspot
                    className={card.icon === "hubspot" ? `image` : "d-none"}
                  />
                  <FaOpencart
                    className={card.icon === "openCart" ? `image` : "d-none"}
                  />
                  <FaSearch
                    className={card.icon === "search" ? `image` : "d-none"}
                  />
                  <FaMousePointer
                    className={
                      card.icon === "mousePointer" ? `image` : "d-none"
                    }
                  />
                  <FaMailBulk
                    className={card.icon === "mailBulk" ? `image` : "d-none"}
                  />
                  <FaAd className={card.icon === "ad" ? `image` : "d-none"} />
                  <FaFacebookF
                    className={card.icon === "facebook" ? `image` : "d-none"}
                  />
                  <FaServer
                    className={card.icon === "server" ? `image` : "d-none"}
                  />
                  <FaDatabase
                    className={card.icon === "database" ? `image` : "d-none"}
                  />
                  <FaDiceD20
                    className={card.icon === "dice" ? `image` : "d-none"}
                  />
                  <FaHammer
                    className={card.icon === "hammer" ? `image` : "d-none"}
                  />
                  <FaFolderOpen
                    className={card.icon === "folder" ? `image` : "d-none"}
                  />
                  <div className="imgContainer">
                    <Image
                      width={200}
                      height={150}
                      layout="fill"
                      src={card.src1}
                      alt={card.alt}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Title>{card.title}</Title>
            <Description>{card.description}</Description>
          </Card>
        ))}
      </CardBox>
    </>
  );
};
