import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

const Column = styled.div`
  background: #fff;
  padding-top: 4rem;
  .head {
    font-size: 56px;
    line-height: 68px;
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
    padding-top: 3rem;
    .head{
      font-size: 45px;
      line-height: 50px;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    p {
      border-right: 0px;
    }
    .head{
      font-size: 30px;
      line-height: 35px;
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
  p {
    border-right: 0;
    line-height: 1.7;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 22px;
  }
  h2 {
    font-size: 50px;
    line-height: 62px;
    color: #000248;
    font-weight: 700;
    margin: 20px 0;
  }
`;

const Spost = (props: any) => {
  const Data = props.post.data;
  console.log(Data);
  return (
    <Column className="row w-100 g-0">
      <div className="container " style={{ maxWidth: "1150px" }}>
        <div className="row" key={Data.id}>
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
                <div className="d-flex  flex-wrap">
                  <p className="date">September 8, 2021</p>
                  <p className="time">5 min read</p>
                  <p className="tag">Online Marketing</p>
                  <p className="tags">
                    Digital Marketing Company In Chandigarh, SEO Company in
                    Mohali
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="imgContainer">
                <Image
                  layout="intrinsic"
                  width={1170}
                  height={500}
                  src={`https://iwebcodestrapi.herokuapp.com${Data.Thumbnail.url}`}
                  alt="Image"
                />
              </div>
            </div>
            <Paragraph className="row w-100 g-0">
              <div>
                <h2>Introduction</h2>
                <p>
                  Firstly SEO plays a vital part in ranking the website higher
                  on Google. Off-page optimization is part of it. Every
                  businessman or even a blogger wishes that everyone will know
                  about their site. Indirectly they want it famous in the world
                  of the web. So, what do you need to do with this so that it
                  takes your popularity to heights through your website?
                </p>
                <p>
                  In this blog, We will clear all the doubts and find ways to
                  get the best SEO of our website. Step by step we will consider
                  each little aspect of it that what it is? How does it work?
                  and what are its way to be popular on the web? To know all the
                  answers let’s just jump into the large world of SEO who has
                  become the most important thing that needs to be
                  noticed.&nbsp; If your blog is good but not noticed by viewers
                  and not even by Google then it would be just like a pizza
                  without cheese. Now let’s get started.
                </p>
                <h2>What is SEO?</h2>
                <p>
                  Not everyone is known by the benefits of SEO. Even a few
                  people didn’t hear this word. So let’s start with its
                  introduction. SEO’s full form is Search engine optimization.
                  Let me expand this too.
                </p>
                <ul>
                  <li>S considered for Find something on the internet</li>
                  <li>E as Engine which actually means ‘Google’</li>
                  <li>
                    O as an optimization that means to improve something in an
                    effective way
                  </li>
                </ul>
                <p>
                  Now let’s combine it together. It means that to whatever your
                  blog is of related. This tool makes some changes by following
                  the Google rule book. Further,&nbsp; Google can sense whether
                  it is eligible to be ranked high or not. If the final step is
                  complete then Google will place your matter at the higher rank
                  automatically.
                </p>
                <h2>Off-Page Optimization</h2>
                <p>
                  A process in which some changes can be created outside of your
                  site for better output under the rules of SEO.
                </p>
                <p>
                  n spite of a familiar way of thinking, there’s something else
                  to off-page advancement besides securing joins. There’s a wide
                  assortment of procedures that can be utilized to give your
                  online endeavor a benefit over the contest. Off-page SEO can
                  keep going for quite a long time, expanding your site’s area
                  rating in the eye of Google and other web crawlers.
                </p>
                <p>
                  A ton of industry specialists believe outer advancement to be
                  of significantly more significance than inward or on-page SEO.
                  In any case, we at Direct Line Development actually accept
                  that both are fundamental all things considered.
                </p>
                <h2>&nbsp;What reason does off-page SEO matter?</h2>
                <p>
                  While search calculations and positioning elements are
                  continually changing, the overall agreement inside the SEO
                  people group is that the significance, reliability, and
                  authority that successful off-page SEO manages the cost of a
                  site actually assume a significant part in a page’s capacity
                  to rank. Google has more than&nbsp; 200 factors for optimizing
                  the websites on a higher rank.
                </p>
                <p>
                  Google is well known for the matter quality which you are
                  providing online. It is only Google’s duty to recommend all
                  the required changes to do. By doing off-page optimization
                  results will be the same as the on-page optimization. In this
                  field, Backlinks play an important part. It is not just the
                  scene of only links.{" "}
                  <a href="https://iwebcode.design/top-rated-seo-company-in-mohali/">
                    <strong>Off-page SEO </strong>
                  </a>
                  helps a site to create an acknowledgment and area authority.
                  Without it, Your webpage will naturally rank underneath
                  different sites that as of now have a more generous lead.
                  While joins are not by any means the only off-page flags that
                  Google’s calculations apply to rank a site. It is maybe the
                  most crucial part of the site. It is important for your
                  website because the reason is it will give a hike in the
                  amounts of credibility along with the popularity.
                </p>
                <h2>
                  Specialized VS. ON-PAGE VS. OFF-PAGE SEO: WHAT’S THE
                  DIFFERENCE?
                </h2>
                <p>
                  Among the positioning elements used to assess sites, the most
                  usually referenced terms are on-page SEO, off-page SEO, and
                  specialized SEO. How about we separate every last one of these
                  three variables:
                </p>
                <p>
                  On-page SEO alludes to the SEO procedures utilized
                  straightforwardly on the site. Advanced webpage content aides
                  web crawler robots which examine sites all day, every day to
                  see how supportive the substance of your site has intended for
                  clients and contrast it with contending sites. Text content,
                  photographs, meta labels, join — these fall under this
                  classification.
                </p>
                <p>
                  Off-page SEO covers all the SEO exercises that happen outside
                  of the bounds of the site. External link establishment is the
                  lord of off-page SEO, in addition to there, are numerous
                  different things you can do off the site to get it to rank
                  higher, like old fashioned PR, online media showcasing, and so
                  forth
                </p>
                <p>
                  Specialized SEO targets working on the slithering and ordering
                  of the site by Google calculations. It incorporates working on
                  the speed, structure, URL canonicalization, and then some.
                  Like on-page optimization is important as it is off-page too.
                  Applying links is not the right work to do. The real action is
                  off-page optimization. The strategy which is being used in
                  this off category will only deliver the best results. Off-page
                  optimizations always care about your reputation on the web As
                  it also provides you the best people traffic to your website
                  who are looking for the best product.
                </p>
                <p>Now let’s move to the Types of Off-page optimization:</p>
                <h2>&nbsp;13 types of Off-Optimization</h2>
                <ol>
                  <li>Reviews</li>
                  <li>Content Syndication</li>
                  <li>Guest Posting</li>
                  <li>Podcast</li>
                  <li>Influencer Marketing</li>
                  <li>Events</li>
                  <li>Social Media</li>
                  <li>Forums</li>
                  <li>Local SEO</li>
                  <li>Pr</li>
                  <li>Brand building</li>
                  <li>Link Building</li>
                  <li>Content marketing</li>
                </ol>
                <h2>Conclusion</h2>
                <p>
                  So, From the discussion of all the above data, It is clear
                  that all the aspects of Off-page optimization are important as
                  it delivers the core technique to get ranked high on Google.
                  As backlinks are the real weapon of off-optimization.
                  Backlinks can only work better if they have the best quality.
                  On the other hand, On and off-page are always had the same
                  benefits but only the best practices can lead a user to reach
                  the best results.
                </p>
                <p>
                  For more Information visit
                  <strong>
                    {" "}
                    <a href="https://iwebcode.design/">IWEBCODE</a>
                  </strong>
                </p>
              </div>
            </Paragraph>
          </div>
        </div>
      </div>
    </Column>
  );
};

export default Spost;
