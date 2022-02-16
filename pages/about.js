import { useState } from "react";
import Layout from "../src/containers/Layout";
import CarouselGroup from "../src/component/Carousel/Carousel";
import { SEO } from "../src/utils/constant";
import Button from "../src/component/Button/Button";
import Section from "../src/component/Section/Section";
import Popup from "../src/component/Popup/Popup";
import Input from "../src/component/Input/Input";

const videos = [
  { link: "/videos/vid1.mp4" },
  { link: "/videos/vid2.mp4" },
  { link: "/videos/vid3.mp4" },
];

const highLightContent = [
  { img: "/img/png/certified1.jpeg", title: "" },
  { img: "/img/png/certified2.jpeg", title: "" },
  { img: "/img/png/certified1.jpeg", title: "" },
  { img: "/img/png/certified2.jpeg", title: "" },
  { img: "/img/png/certified1.jpeg", title: "" },
  { img: "/img/png/certified2.jpeg", title: "" },
  { img: "/img/png/certified1.jpeg", title: "" },
  { img: "/img/png/certified2.jpeg", title: "" },
];

//Styles
const secondaryTextStyle = " text-lg md:text-2xl";

function About(props) {
  const [currBgVid, setCurrBgVid] = useState(0);
  const [isOpen, setIsOpen] = useState(0); //currHighLightImg
  const [currHighLightImg, setCurrHighLightImg] = useState(
    highLightContent[0].img
  );

  const closeModelWindow = () => {
    setIsOpen(false);
  };

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
  // const renderNextPrevBtn = () => {
  //   return (
  //     <div
  //       className={` md:flex max-w-6xl w-full m-auto justify-between fixed z-50 bottom-0`}
  //     >
  //       <div onClick={gotoPrev} className="ml-2 bg-slate-400 p-2 rounded-lg  ">
  //         <img src="/img/svg/left-arrow.png" />
  //       </div>
  //       <div
  //         onClick={gotoNext}
  //         className="rotate-180 mr-2 bg-slate-400 p-2 rounded-lg  "
  //       >
  //         <img src="/img/svg/left-arrow.png" />
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <Layout title="TurfExcel Sports" desc={SEO.DESC}>
      {/* <CarouselGroup
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
            

              <video className="hero-videos" autoPlay muted loop playsInline>
                <source src={vid.link} type="video/mp4" />
           
                Your browser does not support the video tag.
              </video>
            </>
          );
        })}
      </CarouselGroup> */}
      <div className="h-screen">
        <div className="flex justify-between max-w-6xl m-auto align-middle items-center h-full w-full ">
          {/* align-middle justify-center items-center  */}

          <div className="mx-4  md:w-2/3 relative z-10">
            <p
              className={`text-secondary-txt text-lg  md:text-2xl ${secondaryTextStyle}`}
            >
              TurfExcel aims to provide a premium sports and turf experience to
              all sports enthusiasts. TurfExcel has launched its first sports
              arena in Powai. It is the highest rooftop sports arena in Mumbai.
              Players can enjoy their favourite sport alongside an amazing view
              on a certified high quality turf. Whether you play cricket,
              football or any other sport TurfExcel will provide an unmatched
              experience.
            </p>
            <Button
              label="Book Now"
              link="/#booking-form"
              className={` w-40 mt-10 md:w-52 text-lg md:text-2xl text-center rounded-full  ${secondaryTextStyle} `}
            />
          </div>
          <div className="absolute w-full h-screen right-0 top-0 ">
            <img
              src="/img/png/certified1.jpeg"
              className="w-full h-full rounded-lg bottom-5 object-cover"
            />
          </div>
        </div>
        <div
          className="absolute top-0 bg-radial w-full h-screen"
          style={{
            background:
              " radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(50,144,126,0.40) 0%, rgba(0,0,0,0.9500175070028011) 100%)",
          }}
        ></div>
      </div>
      {/* --- Gallery --- */}
      <Section className="" secTitle="Highlights" containerStyle="">
        <Popup
          isOpen={isOpen}
          onBgClick={closeModelWindow}
          img={currHighLightImg}
          // renderNextPrevBtn={renderNextPrevBtn}
        />
        <div className="grid grid-container--fit justify-center mx-auto max-w-6xl m-auto mt-10 ">
          {highLightContent.map((facility, i) => {
            return (
              <>
                <div
                  className="relative m-3 object-cover text-center"
                  key={facility.title + i}
                >
                  <img
                    src={facility.img}
                    alt={facility.title}
                    onClick={() => {
                      setCurrHighLightImg(facility.img);
                      setIsOpen(true);
                    }}
                    className="w-full h-40  object-cover rounded-2xl border-link border-4 sm:border-0 hover:border-4 cursor-pointer"
                  />
                  <div
                    onClick={() => {
                      setCurrHighLightImg(facility.img);
                      setIsOpen(true);
                    }}
                    className=" sm:hidden text-secondary-txt w-full h-40 rounded-2xl m-auto top-0 border-4 bg-black opacity-40  absolute"
                  >
                    View
                  </div>
                  <div
                    className={`text-center text-secondary-bg  my-2 relative z-10  ${secondaryTextStyle} `}
                  >
                    {facility.title}
                  </div>
                </div>
              </>
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
        <p className="text-center sm:mx-auto mx-4 text-secondary-bg max-w-xl my-4">
          For all your queries regarding corporate events or bulk bookings drop
          in your email and we will get in touch with you.
        </p>
        <div className=" flex flex-col md:flex-row max-w-md sm:mx-auto  mt-12 mx-4 ">
          <div className="w-full md:w-3/4 ">
            <Input
              placeholder="Email Id"
              className="w-full rounded-full outline-none"
              type="email"
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
