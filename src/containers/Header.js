import Link from "next/link";
import React from "react";
import Image from "next/image";
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

  render() {
    return (
      <React.Fragment>
        <div className="">
          <div
            className={`font-medium absolute z-50 text-5xl w-full flex justify-center items-center right-0 top-0  mr-0 mt-4`}
            ref={this.myRef}
            onScroll={() => this.handleScroll()}
          >
            <div
              className={`w-full ${this.state.color} `}
              style={{ maxWidth: "1200px" }}
            >
              <div className="w-full flex justify-between items-center text-link  my-2 text-sm">
                <div className="w-1/2 sm:w-1/6 md:ml-4 md:pl-5 ml-4">
                  <Link href="/">
                    <a>
                      <Image
                        src={
                          this.state.globalWindow?.innerWidth > SCREEN.SM
                            ? `${PAGE_URL}/img/svg/full-logo.svg`
                            : `${PAGE_URL}/img/svg/shot-logo.svg`
                        }
                        alt="Geosoft Logo"
                        width={
                          this.state.globalWindow?.innerWidth > SCREEN.SM
                            ? `170`
                            : `50`
                        }
                        height="50"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden  sm:w-1/4 lg:w-2/5 lg:flex h-10 text-link">
                  <div className="w-full flex justify-between">
                    <Link href="/#booking-form">
                      <div className="w-1/5 flex cursor-pointer items-center pt-2 ">
                        <a className="hover:underline">Book Now</a>
                      </div>
                    </Link>
                    <Link href="/#events">
                      <div className="w-1/5 flex cursor-pointer items-center pt-2 ">
                        <a className="hover:underline">Events</a>
                      </div>
                    </Link>
                    <Link href="/about">
                      <div className="w-1/5 flex cursor-pointer items-center pt-2 ">
                        <a className="hover:underline">About Us</a>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`top-0 z-10 right-0 mr-6 fixed  h-screen text-sm  transform duration-1000 block mt-8 lg:hidden pl-10`}
            >
              <div
                className="text-right"
                onClick={() =>
                  this.setState({
                    isRightMenuOpen: !this.state.isRightMenuOpen,
                  })
                }
              >
                <Image
                  src={
                    this.state.isRightMenuOpen
                      ? `${PAGE_URL}/img/svg/cancel-icon.svg`
                      : `${PAGE_URL}/img/svg/ham-menu.svg`
                  }
                  alt="Geosoft Logo"
                  width={this.state.isRightMenuOpen ? `20` : `30`}
                  height="30"
                />
              </div>
              <span
                className={`${
                  this.state.isRightMenuOpen
                    ? "block bg-secondary-txt cursor-pointer text-onPrimary-txt rounded-md  ml-1"
                    : "hidden"
                } }`}
              >
                <Link href="/#booking-form">
                  <div className="p-4 px-6 rounded-t-lg hover:bg-link rounded-tl-default rounded-tr-default">
                    <a>Book Now</a>
                  </div>
                </Link>
                <Link href="/#events">
                  <div className="p-4 px-6 hover:bg-link">
                    <a>Events</a>
                  </div>
                </Link>
                <Link href="/about">
                  <div className="p-4 px-6 rounded-b-lg hover:bg-link rounded-bl-default rounded-br-default">
                    <a>About Us</a>
                  </div>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
