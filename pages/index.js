import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CarouselGroup from "../src/component/Carousel/Carousel";
import Layout from "../src/containers/Layout";
import Section from "../src/component/Section/Section";
import Button from "../src/component/Button/Button";
import { SEO } from "../src/utils/constant";

const videos = [
  { link: "./videos/vid1.mp4" },
  { link: "./videos/vid2.mp4" },
  { link: "./videos/vid3.mp4" },
];

const certifiedContent = [
  { img: "./img/png/certified1.jpeg", title: "Football" },
  { img: "./img/png/certified2.jpeg", title: "Cricket" },
  { img: "./img/png/certified1.jpeg", title: "Volleyball" },
  { img: "./img/png/certified1.jpeg", title: "Volleyball" },
];

const facilitiesContent = [
  { img: "./img/png/certified1.jpeg", title: "Football" },
  { img: "./img/png/certified2.jpeg", title: "Cricket" },
  { img: "./img/png/certified1.jpeg", title: "Volleyball" },
  { img: "./img/png/certified1.jpeg", title: "Volleyball" },
];

const secondaryTextStyle = " text-lg md:text-2xl";

// const videoStyle = {
//   width: "100vw",
//   height: "100vh",
//   objectFit: "cover",
//   position: "absolute",
//   left: "0px",
//   top: "0px",
//   zIndex: "-1",
// };

export default function Home() {
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
      <div
        className="absolute top-0 bg-radial w-full h-screen"
        style={{
          background:
            " radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(50,144,126,0.896796218487395) 0%, rgba(0,0,0,0.9500175070028011) 100%)",
        }}
      ></div>
      <div className="absolute top-0  flex w-full align-middle justify-center items-center  h-screen">
        <div className="flex flex-col mx-4 justify-between h-3/6 text-center w-full m-auto">
          <div className="">
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
          />
          {/* <div className="hidden md:flex max-w-6xl w-full  m-auto justify-between">
            <div onClick={gotoPrev} className="ml-2">
              <img src="./img/svg/left-arrow.png" />
            </div>
            <div onClick={gotoNext} className="rotate-180 mr-2">
              <img src="./img/svg/left-arrow.png" />
            </div>
          </div> */}

          <h2 className="text-2xl  md:text-3xl text-secondary-txt">
            Highest Rooftop Multipurpose-Turf in Mumbai !!
          </h2>
        </div>
      </div>

      {/* --- Certified For --- */}
      <Section className="md:-mt-10" containerStyle="" secTitle="Certified For">
        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl m-auto justify-around mt-10 gap-4">
          {certifiedContent.map((certified) => {
            return (
              <div className="relative text-center">
                <img
                  src={certified.img}
                  alt={certified.title}
                  className="h-32 w-32 md:h-60 md:w-60 rounded-full m-auto"
                />
                <div className="h-32 w-32 md:h-60 md:w-60 rounded-full border-4 bg-black opacity-50  center-positions  md:block absolute"></div>
                <div
                  className={`text-center text-primary-txt center-positions  md:block absolute ${secondaryTextStyle} `}
                >
                  {certified.title}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* --- Booking Form --- */}
      <Section
        className="m-auto text-center text-primary-bg"
        id="booking-form"
        secTitle="Booking Form"
        containerStyle=""
        bgImage="./img/png/certified1.jpeg"
      >
        <div className="grid grid-cols-1  md:grid-cols-2 m-auto w-full max-w-3xl justify-center mt-10 gap-4">
          <div className="sm:hidden ">
            <Button
              className="mx-auto max-w-xs py-2 text-center rounded-full"
              label="View Price Chart"
            />
          </div>
          <div className="mx-auto w-full max-w-xs">
            <input className="form-control w-full rounded-full py-2  px-4" />
          </div>
          <div className="mx-auto w-full max-w-xs">
            <input className="form-control  w-full rounded-full py-2  px-4" />
          </div>
          <div className="mx-auto w-full max-w-xs">
            <input className="form-control  w-full rounded-full py-2  px-4" />
          </div>
          <div className="mx-auto w-full max-w-xs">
            <input className="form-control  w-full rounded-full py-2  px-4" />
          </div>
          <div className="w-full max-w-xs m-auto">
            <Button className="w-24  py-2 rounded-full" label="send" />
          </div>
        </div>
        <div className="sm:block hidden w-full text-center m-auto mt-10">
          <Button
            className="mx-auto max-w-xs py-2 text-center rounded-full"
            label="View Price Chart"
          />
        </div>
      </Section>

      {/* --- Facilities --- */}
      <Section className="" secTitle="Facilities" containerStyle="">
        <div className="grid grid-container--fit mx-4 max-w-6xl m-auto justify-center mt-10 gap-4">
          {facilitiesContent.map((certified) => {
            return (
              <div className="relative object-cover text-center">
                <img
                  src={certified.img}
                  alt={certified.title}
                  className="w-full h-40 object-cover rounded-2xl"
                />
                <div className="w-full h-full rounded-2xl border-4 bg-black opacity-40 center-positions absolute"></div>
                <div
                  className={`text-center text-primary-txt bottom-2 left-4  sm:bottom-6 sm:left-8  absolute ${secondaryTextStyle} `}
                >
                  {certified.title}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* --- Events --- */}
      <Section
        className=""
        containerStyle="mb-32 pt-10"
        removePaddingTop
        secTitle="Join Us For Events!"
        id="events"
      >
        <p className="text-center mx-auto text-secondary-bg max-w-xl my-4">
          For all your queries regarding corporate events or bulk bookings drop
          in your email and we will get in touch with you.
        </p>
        <div className=" flex flex-col md:flex-row max-w-md sm:mx-auto  mt-12 mx-4 ">
          <div className="w-full md:w-3/4 ">
            <input
              placeholder="Email Id"
              className="w-full rounded-full py-2  px-4"
            />
          </div>
          <div className="w-2/4 md:w-1/4 mt-4 md:mt-0">
            <Button
              className="mx-1 w-32 py-2 text-center rounded-full"
              label="Join Us"
            />
          </div>
        </div>
      </Section>

      {/* --- Location --- */}
      <Section
        className=""
        secTitle="Location"
        containerStyle=" bg-primary-bg mt-20 pt-10"
        removePaddingTop
      >
        <div className="flex mx-4 mt-10 ">
          <div className="w-full md:w-9/12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9163121558763!2d72.90584741517607!3d19.111326955826804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7edddef8f53%3A0x9b6a54a6c1123aab!2sTurfExcel%20Sports%20Arena!5e0!3m2!1sen!2sin!4v1643439560887!5m2!1sen!2sin"
              width="100%"
              height="450"
              className=" border-4 rounded-lg"
              allowfullscreen=""
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
