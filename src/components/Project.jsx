import React from "react";
import { BiSend } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";

const Project = () => {
  return (
    <div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20  dark:text-white dark:bg-darkTheme"
    >
      <h4 className="text-center mb-2 text-lg font-ovo ">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12font-ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="flex justify-center items-center align-middle mt-20 gap-16 flex-wrap"
      >
        <a href="https://fintrackexpensetrackhq.netlify.app/" target="_blank">
          <div className=" w-[400px] aspect-square bg-[url(/images/expense.jpg)] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold dark:text-black uppercase">
                  Expense Tracker App
                </h2>
                <p className="text-sm text-gray-700">Web App</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow=[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <BiSend className="dark:text-black" />
              </div>
            </div>
          </div>
        </a>

        <a href="https://homemart-style-mart.onrender.com/" target="_black">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-[400px] aspect-square bg-[url(/images/work-2.png)] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold dark:text-black">
                  HOMEMART STYLE
                </h2>
                <p className="text-sm text-gray-700">
                  Homedecor is a dedicated e-commerce platform...
                </p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow=[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <BiSend className="dark:text-black" />
              </div>
            </div>
          </div>
        </a>
        {/* <div className="aspect-square bg-[url(/images/work-3.png)] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold dark:text-black">
                Crypto Dashboard
              </h2>
              <p className="text-sm text-gray-700">
                I used Authentication on this project
              </p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow=[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <BiSend />
            </div>
          </div>
        </div> */}
      </div>

      <button className="w-max mx-auto flex items-center text-center justify-center border-[0.5px] border-gray-700 rounded-full py-3 px-10 my-20 hover:bg-[#fcf4ff] hover:text-black duration-500 font-ovo">
        Show more <IoIosArrowRoundForward />
      </button>
    </div>
  );
};

export default Project;
