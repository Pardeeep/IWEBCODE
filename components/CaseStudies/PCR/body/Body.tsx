import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Center = styled.div`
  min-height: 400px;
  max-width: 1140px;
  padding: 0 10px;
  .center{
      width: 75%;
  }
  .fullWidth {
    width: 100%;
  }
  @media (max-width: 968px) {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    .center{
        width: 90%;
    }
  }
  @media( max-width: 768px){
      .center{
          width: 100%;
      }
  }
`;

const Detail = styled.div`
  padding: 0 !important;
  width: 85%;
  .heading {
    font-size: 50px;
    line-height: 68px;
    margin-bottom: 20px;
    font-weight: 700;
    padding: 0;
  }
  p {
    color: #757589;
    font-size: 24px;
    line-height: 34px;
  }
  @media (max-width: 968px){
    width: 100%;
    padding: 3rem 10px;
    .heading{
          font-size: 40px;
    }
  }
`;

const Main = styled.section`
  .rowC {
    background: #fafafb;
    padding: 3rem 0;
  }

`;

const Body = () => {
  return (
    <Main className="d-flex justify-content-center flex-column align-items-center">
      <div className="container-fluid d-flex justify-content-center rowC">
        <Center className="row g-0">
          <div className="col height w-100  g-0 d-flex  justify-content-start align-items-center">
            <div className="imgContainer">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2021/01/Content-team-rafiki-1-1536x1536.jpg"
                layout="intrinsic"
                width={490}
                height={490}
                alt="image"
              />
            </div>
          </div>
          <div className="col d-flex justify-content-end ">
            <Detail className="g-0">
              <h1 className="heading ">Context</h1>
              <p className="">
                Designing their website was a very serious task for us! With the
                website, we wanted to depict their message clear and loud. The
                website should portray, that when it comes down to work and
                their clients, PCR team wants no messing around! All this meant
                that the website’s demand was a clean, powerful theme and no
                fancy designs. We vowed to stick to that plan and control our
                urges to display our creativity with the theme! (Trust us on
                this, creating a sober theme is much more difficult than
                designing a glittery, fancy theme!)
              </p>
            </Detail>
          </div>
        </Center>
      </div>
      <Center className="row g-0 py-5 w-100">
        <div className="col w-100 g-0 d-flex flex-column justify-content-center">
          <Detail className="p-0 pb-lg-4">
            <h1 className="heading ">Challenge</h1>
            <p className="">
              If you think creating a website for them was easy, go read the
              last line of the previous paragraph again!! We had to rack our
              brains and shake our entire editing department for the final
              design that you see today. After various sleepless nights and over
              numerous cups of coffee, we scribbled out the final draft! You
              don’t believe us right? We knew the task was no cakewalk, but we
              were proud of ourselves when we sent them the finished product.
              <br />
              <b>
                Our hearts were brimming with a sense of pride, that somehow,
                our work is going to change some convict’s entire life.
              </b>
            </p>
          </Detail>
        </div>
        <div className="col height w-100  g-0 d-flex  justify-content-end align-items-center">
          <div className="imgContainer">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2021/01/Usability-testing-pana-4-1-1536x1536.jpg"
              layout="intrinsic"
              width={550}
              height={550}
              alt="image"
            />
          </div>
        </div>
      </Center>
      <Center className="row g-0 py-5 w-100 justify-content-center">
        <div className="row center g-0 d-flex flex-column justify-content-center">
          <Detail className="p-0 fullWidth pb-lg-4">
            <h1 className="heading ">Experience</h1>
            <p className="fullWidth">
              When we first heard about this project, we knew that this was
              going to be an amazing opportunity for us and the experience was
              worth taking. We tried our best to give the PCR team an equally
              good experience from our end. We left no stone unturned in
              providing them with the best services and timely execution. While
              working with them, we got to learn a lot about trials and
              probations and their work for shortening the sentences motivated
              us throughout the work period!
            </p>
          </Detail>
        </div>
        <div className="row height  g-0 justify-content-center align-items-center">
          <div className="imgContainer center">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/07/web-development-1536x1033.jpg"
              layout="intrinsic"
              width={1200}
              height={700}
              alt="image"
            />
          </div>
        </div>
      </Center>
      {/* \\\\\\\\\\\\\\
           \\\\\\\\\\\\\
            \\\\\\\\\\\\
             \\\\\\\\\\ */}

      <div className="d-flex rowC justify-content-center container-fluid">
        <Center className="row  g-0">
          <div className="col d-flex justify-content-end ">
            <Detail className="fullWidth g-0">
              <h1 className="heading ">Illustration</h1>
              <p className="fullWidth">
                PCR consultants aim at providing a positive change in a client’s
                life. So, we aimed at building a design that portrays
                positivity. According to Feng Shui, White and Blue are colours
                that invoke a sense of positivity; we decided to make them our
                base colours for the theme! Also, we kept the styling as a
                minimalistic one so that it seems like one professional
                consultancy firm’s website and not some gimmick!
              </p>
            </Detail>
          </div>
          <div className="col height w-100  g-0 d-flex  justify-content-start align-items-center">
            <div className="imgContainer">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2021/01/Load-more-rafiki-1-1536x1536.jpg"
                layout="intrinsic"
                width={490}
                height={490}
                alt="image"
              />
            </div>
          </div>
        </Center>
      </div>
      <Center className="row g-0 py-5 w-100">
        <div className="col height w-100  g-0 d-flex  justify-content-end align-items-center">
          <div className="imgContainer">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2021/01/Usability-testing-pana-1-1536x1536.jpg"
              layout="intrinsic"
              width={550}
              height={550}
              alt="image"
            />
          </div>
        </div>
        <div className="col w-100 g-0 d-flex flex-column justify-content-center">
          <Detail className="p-0 fullWidth pb-lg-4">
            <h1 className="heading ">Exhibit Pages</h1>
            <p className="fullWidth">
              We know law means seriousness. So, that should be exhibited on the
              website too! Also, we made sure to use such technologies only,
              that improve efficiency rather than design. We made the
              user-interface easy for the viewer and included all the spheres
              that PCR team covers. Each Pretrial Consulting, Federal Probation
              and 2255 motions were given a dedicated page. Also, we designed a
              page for blog posts where the content would be regularly updated
              by the PCR team!
            </p>
          </Detail>
        </div>
      </Center>
      <Center className="row g-0 py-5 w-100 justify-content-center">
        <div className="row center g-0 d-flex flex-column justify-content-center">
          <Detail className="p-0 fullWidth pb-lg-4">
            <h1 className="heading ">Responsive</h1>
            <p className="fullWidth">
              A complete Mobile Ready solution. We wanted to design a website
              that is accessible on all screen sizes since everyone doesn’t have
              access to a PC or Laptop. The website works seamlessly on all
              devices and can be accessed anywhere in the world.
            </p>
          </Detail>
        </div>
        <div className="row height  g-0 justify-content-center align-items-center">
          <div className="imgContainer center">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2020/07/Web-1920-%E2%80%93-1@2x-1536x1010.png"
              layout="intrinsic"
              width={1200}
              height={700}
              alt="image"
            />
          </div>
        </div>
      </Center>
      <div className="d-flex rowC justify-content-center container-fluid">
        <Center className="row g-0">
          <div className="col d-flex justify-content-end ">
            <Detail className="fullWidth g-0">
              <h1 className="heading ">Content</h1>
              <p className="fullWidth">
                After preparing the firefighter front-end, we moved towards
                getting back-end warriors ready for court! We incorporated some
                basic tools required by the client to know PCR, contact them and
                then get down to work! We don’t waste a single moment,
                Seriously!
              </p>
            </Detail>
          </div>
          <div className="col height w-100  g-0 d-flex  justify-content-start align-items-center">
            <div className="imgContainer">
              <Image
                src="https://iwebcode.design/wp-content/uploads/2021/01/Usability-testing-pana-2-1-1536x1536.jpg"
                layout="intrinsic"
                width={490}
                height={490}
                alt="image"
              />
            </div>
          </div>
        </Center>
      </div>
      <Center className="row py-5 g-0">
        <div className="col height w-100  g-0 d-flex  justify-content-start align-items-center">
          <div className="imgContainer">
            <Image
              src="https://iwebcode.design/wp-content/uploads/2021/01/Usability-testing-pana-3-1-1536x1536.jpg"
              layout="intrinsic"
              width={490}
              height={490}
              alt="image"
            />
          </div>
        </div>
        <div className="col d-flex justify-content-end ">
          <Detail className="fullWidth g-0">
            <h1 className="heading ">Outcome</h1>
            <p className="fullWidth">
              Now, this is our favourite part. The EndGame!! After arduous work
              and total consistency, we sent over the final product and
              considered giving ourselves a pat on the back after PCR team
              praised us! We can proudly say, that this website was curated by
              love, by IWEBCODE!
            </p>
          </Detail>
        </div>
      </Center>
    </Main>
  );
};

export default Body;
