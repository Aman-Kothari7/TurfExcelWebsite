import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import CarouselGroup from "../src/component/Carousel/Carousel";
import Layout from "../src/containers/Layout";
import Section from "../src/component/Section/Section";
import Button from "../src/component/Button/Button";
import { SEO } from "../src/utils/constant";
import Popup from "../src/component/Popup/Popup";
import Input from "../src/component/Input/Input";
import Validator from "../src/utils/validator.js";
import { sendEmail, timeConvertToAmPm } from "../src/utils/utils";
import EmailBox from "../src/component/EmailBox/EmailBox";

const validator = new Validator();

const videos = [
  { link: "./videos/vid1.mp4" },
  { link: "./videos/vid2.mp4" },
  { link: "./videos/vid3.mp4" },
];

const certifiedContent = [
  { img: "./img/football/f6.jpg", title: "Football" },
  { img: "./img/cricket/c2.jpg", title: "Cricket" },
  { img: "./img/tennis/t3.jpg", title: "Tennis" },
  { img: "./img/volleyball/v3.jpg", title: "Volleyball" },
];

const facilitiesContent = [
  { img: "./img/facility/fs1.jpg", title: "Sports Equipment" },
  { img: "./img/facility/fs4.jpg", title: "Food and Beverages" },
  { img: "./img/facility/fs3.jpg", title: "Washroom" },
  { img: "./img/facility/fs2.jpg", title: "Nearby cafes/clubs" },
];

const priceImg = "/img/png/certified1.jpeg";

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

const Home = () => {
  const [currBgVid, setCurrBgVid] = useState(0);
  const [isOpen, setIsOpen] = useState(0);
  const [showFormSuccessMsg, setShowFormSuccessMsg] = useState(false);
  const [showFormError, setShowFormError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    activity: "",
    facility: "",
    date: "",
    email: "",
    time: {
      start: "",
      end: "",
    },
  });
  const [formError, setFormError] = useState({
    name: "",
    phoneNumber: "",
    activity: "",
    facility: "",
    date: "",
    email: "",
    time: {
      start: "",
      end: "",
    },
  });

  useEffect(async () => {
    // process.env.fromEmail,
    // process.env.toEmail,
    // process.env.SERVICE_ID,
    // process.env.TEMPLATE_ID,
    // process.env.USER_ID,
    // process.env.ACCESS_TOKEN,
  });

  const submitForm = async () => {
    if (!validator.isAllInputsValid()) return setShowFormError(true);
    const { name, phoneNumber, activity, facility, date, email, time } =
      formData;

    setShowFormSuccessMsg(true);
    setTimeout(() => {
      setShowFormSuccessMsg(false);
    }, 3000);

    setFormData({
      name: "",
      phoneNumber: "",
      activity: "",
      facility: "",
      date: "",
      email: "",
      time: {
        start: "",
        end: "",
      },
    });

    await sendEmail({
      name,
      phoneNumber,
      activity,
      facility,
      date,
      email,
      time: {
        start: timeConvertToAmPm(time.start),
        end: timeConvertToAmPm(time.end),
      },
    });
  };

  const closeModelWindow = () => {
    setIsOpen(false);
  };

  const newDate = new Date();
  return (
    <Layout title={SEO.TITLE} desc={SEO.DESC}>
      <Popup isOpen={isOpen} onBgClick={closeModelWindow} img={priceImg} />
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
        {videos.map((vid, i) => {
          return (
            <>
              {/* w-screen h-full max-h-screen overflow-hidden object-cover
                bottom-0 left-0 */}

              <video
                key={i + "hero-videos"}
                className="hero-videos"
                autoPlay
                muted
                loop
                playsInline
              >
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
            " radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(50,144,126,0.40) 0%, rgba(0,0,0,0.9500175070028011) 100%)",
        }}
      ></div>
      <div className="absolute top-0  flex w-full align-middle justify-center items-center  h-screen">
        <div className="flex flex-col mx-4 justify-between h-3/6 text-center w-full m-auto">
          <div className="">
            <h2 className=" text-5xl  md:text-7xl font-primary text-primary-txt">
              TurfExcel Sports Arena
            </h2>
            <p
              className={`text-secondary-txt text-lg md:text-2xl mt-4 ${secondaryTextStyle}`}
            >
              Premium sports experience at an <i> affordable price </i>
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

          <h2 className="text-3xl  md:text-5xl text-secondary-txt">
            Highest Rooftop Turf in
            <span className="text-primary-txt">
              <strong> Mumbai</strong>
            </span>
          </h2>
        </div>
      </div>

      {/* --- Certified For --- */}
      <Section
        className="md:-mt-10 text-6xl"
        containerStyle="text-6xl"
        secTitle="Certified For"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl m-auto justify-around mt-10 gap-4">
          {certifiedContent.map((certified, i) => {
            return (
              <div className="relative text-center " key={certified.title + i}>
                <img
                  src={certified.img}
                  alt={certified.title}
                  className="h-32 w-32 md:h-60 md:w-60 rounded-full m-auto object-cover shadow-2xl"
                />
                {/* <div className="h-32 w-32 md:h-60 md:w-60 rounded-full border-4 bg-black opacity-30  center-positions  md:block absolute"></div> */}
                <h2
                  className={`text-center p-1 rounded-lg bg-black bg-opacity-50 text-primary-txt center-positions  md:block absolute ${secondaryTextStyle} `}
                >
                  {certified.title}
                </h2>
              </div>
            );
          })}
        </div>
      </Section>

      {/* --- Booking Form --- */}
      <Section
        className="m-auto text-center text-secondary-txt"
        id="booking-form"
        secTitle="Booking Form"
        containerStyle=""
        bgImage="./img/png/certified1.jpeg"
      >
        <div className="grid grid-cols-1 text-black  md:grid-cols-2 m-auto w-full max-w-3xl justify-center mt-10 gap-4">
          <div className="sm:hidden ">
            <Button
              className="mx-auto max-w-xs py-2 text-center rounded-full"
              label="View Price Chart"
              onClick={() => setIsOpen(true)}
            />
            <p className="text-secondary-txt text-xs mt-2">24 hours Open</p>
          </div>
          <div className="mx-auto w-full max-w-xs">
            <Input
              placeholder="Name"
              className="w-full rounded-full"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setShowFormError(false);
              }}
              errorMessage={validator.isNotName(formData.name)}
              showError={showFormError}
            />
          </div>
          <div className="max-w-xs w-full mx-auto ">
            <Input
              label="Date:"
              placeholder=""
              type="date"
              value={formData.date}
              className=" bg-primary-txt outline-none rounded-full "
              onChange={(e) => {
                setFormData({ ...formData, date: e.target.value });
                setShowFormError(false);
              }}
              min={newDate}
              errorMessage={validator.isNotDate(formData.date)}
              showError={showFormError}
            />
          </div>
          <div className="mx-auto w-full max-w-xs">
            <Input
              placeholder="Phone Number"
              className="w-full rounded-full py-2  px-4"
              value={formData.phoneNumber}
              onChange={(e) => {
                setFormData({ ...formData, phoneNumber: e.target.value });
                setShowFormError(false);
              }}
              type="phone"
              errorMessage={validator.isNotPhoneNumber(formData.phoneNumber)}
              showError={showFormError}
            />
          </div>
          {/* <div className=" mx-auto w-full max-w-xs">
            <Input
              placeholder="Email: my@turfexcel.com"
              className=" w-full rounded-full py-2  px-4"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
            />
          </div> */}

          <div className="mx-auto w-full max-w-xs">
            {/* <Input
              placeholder=""
              className=" w-full rounded-full py-2  px-4"
            /> */}
            <select
              name="Activity"
              className="text-black pr-4  w-full rounded-full py-2  px-4"
              value={formData.activity}
              onChange={(e) => {
                setFormData({ ...formData, activity: e.target.value });
                setShowFormError(false);
              }}
            >
              <option value="">Activity?</option>
              <option value="football" className="">
                Football
              </option>
              <option value="cricket">Cricket</option>
              <option value="tennis">Tennis</option>
              <option value="volleyball">Volleyball</option>
              <option value="photoShoot">Photo shoot</option>
              <option value="event">Event</option>
              <option value="other">Other...</option>
            </select>
            {showFormError ? (
              <p className=" text-red-300 text-md h-3">
                {validator.isNotValidActivity(formData.activity)}
              </p>
            ) : (
              <p className="text-sm h-3"> &nbsp; </p>
            )}
          </div>
          <div className="hidden mx-auto w-full max-w-xs">
            {/* <Input
              placeholder=""
              className=" w-full rounded-full py-2  px-4"
            /> */}
            <select
              name="Facility"
              className="text-black pr-4  w-full rounded-full py-2  px-4 shadow-2xl"
              onChange={(e) => {
                setFormData({ ...formData, facility: e.target.value });
                setShowFormError(false);
              }}
            >
              <option value="">Facility?</option>
              <option value="food" className="">
                Food and Beverages
              </option>
              <option value="equipment">Sports Equipment</option>
              <option value="">None</option>
            </select>
          </div>

          <div className="mx-auto w-full max-w-xs ">
            <Input
              label="Start:"
              value={formData.time.start}
              type="time"
              className="rounded-full px-2 bg-primary-txt outline-none"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  time: { ...formData.time, start: e.target.value },
                })
              }
              errorMessage={validator.isNotStartTime(
                formData.time.start,
                formData.time.end //max
              )}
              showError={showFormError}
            />
          </div>
          <div className="mx-auto w-full max-w-xs ">
            <Input
              label="End: "
              type="time"
              value={formData.time.end}
              className="rounded-full px-2 bg-primary-txt outline-none"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  time: { ...formData.time, end: e.target.value },
                });
                setShowFormError(false);
              }}
              errorMessage={validator.isNotEndTime(
                formData.time.end,
                formData.time.start //min
              )}
              showError={showFormError}
            />
          </div>

          <div className="w-full max-w-xs m-auto items-end justify-items-end justify-end">
            <Button
              className="w-32 py-2 rounded-full"
              label="Submit"
              onClick={submitForm}
            />
          </div>
        </div>
        {showFormSuccessMsg ? (
          <div className="">Will reach you soon!</div>
        ) : (
          <div className=""> &nbsp;</div>
        )}
        <div className="sm:block hidden w-full text-center m-auto mt-20">
          <p className="text-secondary-txt text-lg mb-2">24 hours Open</p>
          <Button
            className="mx-auto max-w-xs py-2 text-center rounded-full"
            label="View Price Chart"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </Section>

      {/* --- Facilities --- */}
      <Section className="" secTitle="Facilities" containerStyle="">
        <div className="grid grid-container--fit justify-center mx-auto max-w-6xl m-auto mt-10 ">
          {facilitiesContent.map((facility, i) => {
            return (
              // <div
              //   className="relative m-3 object-cover text-center"
              //   key={facility.title + i}
              // >
              //   <img
              //     src={facility.img}
              //     alt={facility.title}
              //     className="w-full h-40  object-cover rounded-2xl"
              //   />
              //   <div className="w-full h-full rounded-2xl border-4 bg-black opacity-40 center-positions absolute"></div>
              //   <div
              //     className={`text-center text-primary-txt bottom-3 left-4  absolute ${secondaryTextStyle} `}
              //   >
              //     {facility.title}
              //   </div>
              // </div>
              <>
                <div
                  className="relative m-3 object-cover text-center"
                  key={facility.title + i}
                >
                  <img
                    src={facility.img}
                    alt={facility.title}
                    className="w-full h-40 object-cover rounded-2xl border-4 cursor-pointer shadow-2xl"
                  />
                  {/* <div
                    onClick={() => {
                      setCurrHighLightImg(facility.img);
                      setIsOpen(true);
                    }}
                    className=" sm:hidden text-secondary-txt w-full h-40 rounded-2xl m-auto top-0 border-4 bg-black opacity-40  absolute"
                  >
                    View
                  </div> */}
                  <p
                    className={`text-center text-secondary-bg mt-6  my-2 relative z-10  ${secondaryTextStyle} `}
                  >
                    {facility.title}
                  </p>
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
        <h2 className="text-center mx-auto text-secondary-bg max-w-xl my-4">
          For all your queries regarding corporate events or bulk bookings drop
          in your email and we will get in touch with you.
        </h2>
        <EmailBox />
      </Section>

      {/* --- Location --- */}
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
              className=" border-4 rounded-lg shadow-2xl"
              // allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="hidden md:block w-3/12 m-6">
            <p className="text-xl font-bold text-secondary-bg">
              TurfExcel Sports Arena
            </p>
            <p className=" text-sm text-secondary-bg  max-w-xs">
              SUPREME BUSINESS PARK, B Wing,12th Floor, Hiranandani Gardens,
              Powai, Mumbai, Maharashtra 400076
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Home;
