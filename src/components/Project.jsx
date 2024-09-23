import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Project = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20  dark:text-white dark:bg-black">
      <h4 className="text-center mb-2 text-lg font-ovo ">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12font-ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="grid grid-cols-auto my-10 gap-5">
        <div className="aspect-square bg-[url(/images/work-1.png)] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold dark:text-black">Frontend project</h2>
              <p className="text-sm text-gray-700">Web design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow=[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img
                src="/images/send-icon.png"
                alt="send-icon"
                className="w-5"
              />
            </div>
          </div>
        </div>
        <div className="aspect-square bg-[url(/images/work-2.png)] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold dark:text-black">Frontend project</h2>
              <p className="text-sm text-gray-700">Web design</p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow=[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img
                src="/images/send-icon.png"
                alt="send-icon"
                className="w-5"
              />
            </div>
          </div>
        </div>
        <div className="aspect-square bg-[url(/images/work-3.png)] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">
          <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
            <div>
              <h2 className="font-semibold dark:text-black">Crypto Dashboard</h2>
              <p className="text-sm text-gray-700">
                I used Authentication on this project
              </p>
            </div>
            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow=[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img
                src="/images/send-icon.png"
                alt="send-icon"
                className="w-5"
              />
            </div>
          </div>
        </div>
      </div>

      <button className="w-max mx-auto flex items-center text-center justify-center border-[0.5px] border-gray-700 rounded-full py-3 px-10 my-20 hover:bg-[#fcf4ff] hover:text-black duration-500 font-ovo">
        Show more <IoIosArrowRoundForward />
      </button>
    </div>
  );
};

export default Project;
