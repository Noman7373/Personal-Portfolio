import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20  dark:text-white dark:bg-black"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">What i offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12  dark:text-white dark:bg-black font-ovo ">
        I am a front end web developer.Skilled in transforming design concepts
        into dynamic, functional interfaces
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff]  hover:text-black hover:-translate-y-1 duration-500">
          <img src="/images/web-icon.png" alt="web-icon" className="W-10" />
          <h3 className="text-lg my-4">
            Web Design
          </h3>
          <p className="text-sm leading-5 font-ovo hover:text-black">
            Web development is the process of building, programming...
          </p>
        </div>

        <div className=" border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:text-black">
          <img src="/images/mobile-icon.png" alt="web-icon" className="W-10" />
          <h3 className="text-lg my-4 ">
            React Native Mobile App
          </h3>
          <p className="text-sm leading-5 font-ovo">
            Graphic design services that elevate your brand with impactful
            visuals.
          </p>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:text-black">
          <img
            src="/images/graphics-icon.png"
            alt="web-icon"
            className="W-10"
          />
          <h3 className="text-lg my-4">
            Graphics design
          </h3>
          <p className="text-sm leading-5 font-ovo">
            Graphic design services that elevate your brand with impactful
            visuals.
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:text-black">
          <img src="/images/ui-icon.png" alt="web-icon" className="W-10" />
          <h3 className="text-lg my-4">
            UI/UX design
          </h3>
          <p className="text-sm leading-5 font-ovo">
            UI/UX services designed to create intuitive and engaging user
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
