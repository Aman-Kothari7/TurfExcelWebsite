import Link from "next/link";

const socialMedia = [
  { link: "#", img: "./img/svg/social/instagram.svg", name: "" },
  { link: "#", img: "./img/svg/social/facebook.png", name: "" },
  { link: "#", img: "./img/svg/social/instagram.svg", name: "" },
  { link: "#", img: "./img/svg/social/facebook.png", name: "" },
];

const Footer = () => {
  return (
    <div className="pt-20  bottom-0 relative text-secondary-txt bg-primary-bg">
      <img
        className=" md:h-20 w-full"
        src="./img/svg/top-ground.png"
        alt="ground"
      />
      <h2 className="text-3xl md:text-4xl w-full text-center absolute top-28">
        Contact Us
      </h2>
      <div className="w-full bg-secondary-bg">
        <div className="grid p-4 md:p-8 pt-20  max-w-2xl m-auto justify-between grid-cols-1 md:grid-cols-2">
          <div className="md:mx-auto">
            <h3 className="">ADDRESS</h3>
            <p className="text-xs text-primary-txt max-w-sm">
              M/S TURFEXCEL SPORTS LLP. 406 4th Floor VakraTunda Corporate
              Park,Off Aarey Road, Near Udupi Hotel, Goregoan East Mumbai
              400063.
            </p>
          </div>
          <div className="md:mx-auto md:mt-0 mt-10">
            <h3 className="">EVENT BOOKING</h3>
            <p className="text-xs text-primary-txt">
              Phone: 0987654322 <br />
              Phone: 0987654322
            </p>
          </div>
        </div>
        <div className="m-auto py-10 justify-center gap-3 flex text-center">
          {socialMedia.map((social) => {
            return (
              <div className="hover:bg-link rounded-lg cursor-pointer ">
                <Link href={social.link}>
                  <img src={social.img} className="" alt={social.name} />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="grid pb-10 max-w-2xl m-auto justify-between grid-cols-1 md:grid-cols-2">
          <div className="text-center mt-10 md:mt-0 md:text-left underline ">
            <Link href="#">
              <a className="hover:text-link">Terms & Condition</a>
            </Link>
          </div>
          <div className="text-center mt-10 md:mt-0 md:text-right underline ">
            <Link href="#">
              <a className="hover:text-link">All Rights Reserved</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
