import Link from "next/link";
import React from "react";
import { PAGE_URL, SCREEN } from "../utils/constant";

class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.handleScroll = this.handleScroll.bind(this);

    this.myRef = React.createRef();
    this.state = {
      isRightMenuOpen: false,
      globalWindow: null,
    };

    this.contactList = [
      {
        name: "whatsapp",
        link: "https://wa.me/+919321455375?lang=en",
        img: "/img/svg/floating-btn/whatsapp.svg",
      },
      {
        name: "call",
        link: "tel:9321455375",
        img: "/img/svg/floating-btn/call.svg",
      },
      {
        name: "email",
        link: "mailto:turfexcel.in@gmail.com",
        img: "/img/svg/floating-btn/email.svg",
      },
    ];
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      this.setState({ globalWindow: window });
    }
    // window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // window.removeEventListener("scroll", this.handleScroll);
  }
  closeMenuAndContactBtn = () => {
    this.setState({
      isRightMenuOpen: false,
      isFloatingContactOpen: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="">
          {this.state.isRightMenuOpen || this.state.isFloatingContactOpen ? (
            <div
              className="fixed bg-transparent w-full h-screen z-20"
              onClick={this.closeMenuAndContactBtn}
            ></div>
          ) : (
            <></>
          )}
          <div
            className={`font-medium absolute z-20 text-5xl w-full flex justify-center items-center right-0 top-0  mr-0 mt-4`}
            ref={this.myRef}
            onScroll={() => this.handleScroll()}
          >
            <div
              className={`w-full max-w-7xl ${this.state.color} `}
              // style={{ maxWidth: "1200px" }}
            >
              <div className="w-full flex justify-between items-center text-link  my-2 text-sm">
                <div className="w-1/2 sm:w-1/6 md:ml-4 md:pl-5 ml-4">
                  <Link href="/">
                    <a>
                      <img
                        src={
                          this.state.globalWindow?.innerWidth > SCREEN.MD
                            ? `/img/svg/full-logo.svg`
                            : `/img/svg/shot-logo.svg`
                        }
                        alt="turfExcel Logo"
                        width={
                          this.state.globalWindow?.innerWidth > SCREEN.MD
                            ? `170`
                            : `50`
                        }
                        height="50"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden  sm:w-1/4 lg:w-2/5 lg:flex h-10 text-link">
                  <div className="w-full flex justify-between align-middle items-center text-center mr-10 2xl:mr-0">
                    <Link href="/#booking-form">
                      <div className=" cursor-pointer text-center items-center pt-2 ">
                        <a className="hover:underline">Book Now</a>
                      </div>
                    </Link>
                    <Link href="/#events">
                      <div className=" cursor-pointer text-center items-center pt-2 ">
                        <a className="hover:underline">Events</a>
                      </div>
                    </Link>
                    <Link href="#location">
                      <div className=" cursor-pointer text-center items-center pt-2 ">
                        <a className="hover:underline">Location</a>
                      </div>
                    </Link>
                    <Link href="/about">
                      <div className=" cursor-pointer text-center items-center pt-2 ">
                        <a className="hover:underline">About Us</a>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`top-0 z-10 outline-none right-0 mr-6 fixed  text-sm  transform duration-1000 block mt-8 lg:hidden pl-10 remove-highlight`}
              onBlur={() =>
                this.setState({
                  isRightMenuOpen: false,
                })
              }
            >
              <div
                className="flex justify-end mb-2 "
                onClick={() =>
                  this.setState({
                    isRightMenuOpen: !this.state.isRightMenuOpen,
                  })
                }
              >
                <img
                  src={
                    this.state.isRightMenuOpen
                      ? `/img/svg/cancel-icon.svg`
                      : `/img/svg/ham-menu.svg`
                  }
                  alt="turfExcel Logo"
                  width={this.state.isRightMenuOpen ? `20` : `30`}
                  height="30"
                />
              </div>
              <span
                className={`${
                  this.state.isRightMenuOpen
                    ? "block bg-secondary-txt text-lg  cursor-pointer text-onPrimary-txt rounded-md  ml-1"
                    : "hidden"
                } }`}
              >
                <Link href="/#booking-form">
                  <div className="p-4 px-8 rounded-t-lg hover:bg-link rounded-tl-default rounded-tr-default">
                    <a>Book Now</a>
                  </div>
                </Link>
                <Link href="/#events">
                  <div className="p-4 px-8 hover:bg-link">
                    <a>Events</a>
                  </div>
                </Link>
                <Link href="#location">
                  <div className="p-4 px-8 hover:bg-link">
                    <a>Location</a>
                  </div>
                </Link>
                <Link href="/about">
                  <div className="p-4 px-8 rounded-b-lg hover:bg-link rounded-bl-default rounded-br-default">
                    <a>About Us</a>
                  </div>
                </Link>
              </span>
            </div>
            {/* Floating Icons */}
            <div
              className="w-full bottom-10 z-10 max-w-7xl m-auto h-10 fixed outline-none"
              onBlur={() =>
                this.setState({
                  isFloatingContactOpen: false,
                })
              }
            >
              <div className="absolute right-4 -bottom-6 shadow-2xl bg-primary-txt rounded-t-full rounded-b-full duration-500 ease-in-out">
                {this.contactList.map((contact) => {
                  return (
                    <Link href={contact.link}>
                      <div
                        className={`bg-primary-txt  ${
                          this.state.isFloatingContactOpen
                            ? ""
                            : "opacity-100 fixed"
                        } hover:bg-link rounded-full `}
                      >
                        <img
                          className={`p-4 w-16 h-16 ${
                            !this.state.isFloatingContactOpen
                              ? "hidden"
                              : "block"
                          }`}
                          src={contact.img}
                          alt={contact.name || "contact"}
                        />
                      </div>
                    </Link>
                  );
                })}
                <div className="w-16 h-16 bg-primary-txt   rounded-full">
                  <div className="p-4 w-16 h-16 " />
                </div>
              </div>
              <div
                onClick={() => {
                  this.setState({
                    isFloatingContactOpen: !this.state.isFloatingContactOpen,
                  });
                  this.forceUpdate();
                }}
                className="w-16 h-16 bg-primary-txt right-4 absolute hover:bg-link rounded-full"
              >
                <img
                  className="p-4 w-16 h-16 "
                  src="/img/svg/floating-btn/contact.svg"
                  alt="contact"
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
