import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsDownload } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <div
      id="/"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4  dark:text-white dark:bg-black"
    >
      <img
        src="/images/my-dp2.jpg"
        alt="user-img"
        className="rounded-full w-32"
      />
      <h3 className="text-xl md:text-2xl mb-3 font-ovo">Hi! I'm Noman Ahmed</h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Front End Web Developer based in Bahrain
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        Front End React Developer dedicated to building engaging and
        user-friendly web applications with a focus on seamless design.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <button className="flex items-center justify-center px-10 py-3 border rounded-full bg-gradient-to-r from-[#D820e6] to-[#de7d20] text-wrap gap-2 text-white">
            Contact me <IoIosArrowRoundForward />
          </button>
        </AnchorLink>
        <button className="flex items-center justify-center px-10 py-3 border rounded-full border-gray-500 dark:bg-black dark:text-white text-wrap gap-2">
          My Resume <BsDownload />
        </button>
      </div>
    </div>
  );
};

export default Header;
