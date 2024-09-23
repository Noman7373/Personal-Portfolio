import React, { useEffect, useRef, useState } from "react";
import logo from "/images/logo.png";
import { MdArrowOutward, MdWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const [sideMenu, setSideMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [modeIcon, setModeIcon] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Scroll background change logic
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMode = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    setModeIcon((prev) => !prev);
  };
  const handleSideMenu = () => {
    setSideMenu((prev) => !prev);
  };

  const handleRouter = (selectId, path) => {
    navigate(path);
    const section = document.getElementById(selectId);
    section?.scrollIntoView({ behavior: "smooth" });
    setSideMenu(false);
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src="/images/header-bg-color.png" alt="bg" className="w-full " />
      </div>
      <nav
        ref={ref}
        className={`w-full fixed px-5 lg:px-[8%] py-4 flex items-center justify-between z-10 dark:text-white dark:bg-black ${
          scroll ? "bg-white opacity-50 backgroud-blur-lg shadow-sm text-black" : ""
        }`}
      >
        <h1 className="text-xl font-semibold font-ovo sm:text-3xl">
          Noman Ahmed
        </h1>

        <ul
          className={`hidden md:flex items-center gap-3 lg:gap-6 rounded-full px-12 py-3 font-ovo  dark:text-white dark:bg-black ${
            scroll ? "text-black": " bg-white shadow-sm bg-opacity-50"
          }`}
        >
          <li onClick={() => handleRouter("home", "/")}>
            <AnchorLink className="anchor-link" offset={50} href="#/">
              Home
            </AnchorLink>
          </li>
          <li onClick={() => handleRouter("home", "/work")}>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              My Work
            </AnchorLink>
          </li>
          <li onClick={() => handleRouter("home", "/services")}>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              Services
            </AnchorLink>
          </li>
          <li onClick={() => handleRouter("home", "/about")}>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              About me
            </AnchorLink>
          </li>
          <li onClick={() => handleRouter("home", "/contact")}>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Contact Us
            </AnchorLink>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-10 cursor-pointer flex items-center justify-center text-[2rem]"
            onClick={handleMode}
          >
            {modeIcon ? <MdWbSunny /> : <IoMoonOutline />}
          </div>

          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <button className="hidden lg:flex items-center gap-1 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo">
              Contact <MdArrowOutward className="w-6 h-6" />
            </button>
          </AnchorLink>
          <button className="block md:hidden ml-3">
            <RiMenu3Line
              className="w-8 h-8 cursor-pointer"
              onClick={handleSideMenu}
            />
          </button>
        </div>

        {/* --------------------Mobile Mune-------------------- */}
        <ul
          id="sideMenu"
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 ${
            sideMenu ? "translate-x-[-16rem]" : "translate-x-[16rem]"
          } top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500`}
        >
          <div className="absolute right-6 top-6">
            <RxCross1
              className="w-6 h-6 cursor-pointer"
              onClick={() => handleSideMenu()}
            />
          </div>
          <li onClick={() => handleSideMenu()}>Home</li>
          <li onClick={() => handleSideMenu()}>My Work</li>
          <li onClick={() => handleSideMenu()}>Services</li>
          <li onClick={() => handleSideMenu()}>About Us</li>
          <li onClick={() => handleSideMenu()}>Contact My</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
