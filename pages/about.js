import { useState } from "react";
import Layout from "../src/containers/Layout";
import CarouselGroup from "../src/component/Carousel/Carousel";
import { SEO } from "../src/utils/constant";
import Button from "../src/component/Button/Button";
import Section from "../src/component/Section/Section";

const videos = [
  { link: "./videos/vid1.mp4" },
  { link: "./videos/vid2.mp4" },
  { link: "./videos/vid3.mp4" },
];
const secondaryTextStyle = " text-lg md:text-2xl";

function About(props) {
  const [currBgVid, setCurrBgVid] = useState(0);

  const gotoNext = () => {
    if (currBgVid === videos.length - 1) {
      setCurrBgVid(0);
    } else {
      setCurrBgVid(currBgVid + 1);
    }
  };

  const gotoPrev = () => {
    if (currBgVid === 0) {
      setCurrBgVid(videos.length - 1);
    } else {
      setCurrBgVid(currBgVid - 1);
    }
  };
  return (
    <Layout title="Turf Excel Sports" desc={SEO.DESC}>
      <CarouselGroup
        autoPlay
        selectedItem={currBgVid}
        infiniteLoop
        showArrows={false}
        // showIndicators={false}
        transitionTime={1000}
        interval={10000}
        // stopOnHover={true}
      >
        {videos.map((vid) => {
          return (
            <>
              {/* w-screen h-full max-h-screen overflow-hidden object-cover
                bottom-0 left-0 */}

              <video className="hero-videos" autoPlay muted loop playsInline>
                <source src={vid.link} type="video/mp4" />
                {/* <source src="./videos/vid1.ogg" type="video/ogg" /> */}
                Your browser does not support the video tag.
              </video>
            </>
          );
        })}
      </CarouselGroup>
      <div className="absolute top-0  flex w-full align-middle justify-center items-center  h-screen">
        <div className="flex flex-col mx-4 justify-between h-3/6 text-center w-full m-auto">
          {/*<div className="">
             <h2 className=" text-4xl  md:text-7xl font-primary text-primary-txt">
              Turf Excel Sports Arena
            </h2>
            <p
              className={`text-secondary-txt text-lg md:text-2xl mt-4 ${secondaryTextStyle}`}
            >
              Premium sports experience at an affordable price
            </p>
          </div>
          <Button
            label="Book Now"
            link="#booking-form"
            className={` w-40 md:w-52 text-lg md:text-2xl rounded-full  m-auto ${secondaryTextStyle} `}
          /> */}
          <div className="hidden md:flex max-w-6xl w-full  m-auto justify-between">
            <div onClick={gotoPrev} className="ml-2">
              <img src="./img/svg/left-arrow.png" />
            </div>
            <div onClick={gotoNext} className="rotate-180 mr-2">
              <img src="./img/svg/left-arrow.png" />
            </div>
          </div>

          {/* <h2 className="text-2xl  md:text-3xl text-secondary-txt">
            Highest Rooftop Multipurpose-Turf in Mumbai !!
          </h2> */}
        </div>
      </div>
      <Section
        className=""
        secTitle="Location"
        containerStyle=" bg-primary-bg mt-20 pt-10"
        removePaddingTop
        id="location"
      >
        <div className="flex mx-4 mt-10 ">
          <div className="w-full md:w-9/12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9163121558763!2d72.90584741517607!3d19.111326955826804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7edddef8f53%3A0x9b6a54a6c1123aab!2sTurfExcel%20Sports%20Arena!5e0!3m2!1sen!2sin!4v1643439560887!5m2!1sen!2sin"
              width="100%"
              height="450"
              className=" border-4 rounded-lg"
              // allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="hidden md:block w-3/12 m-6">
            <h2 className="text-xl font-bold text-secondary-bg">
              TurfExcel Sports Arena
            </h2>
            <p className=" text-sm text-secondary-bg  max-w-xs">
              SUPREME BUSINESS PARK, B Wing,12th Floor, Hiranandani Gardens,
              Powai, Mumbai, Maharashtra 400076
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}

export default About;
