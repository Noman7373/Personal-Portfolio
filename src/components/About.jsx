import React from "react";
import { PiBriefcaseThin } from "react-icons/pi";
import { RiCodeSSlashLine } from "react-icons/ri";
import { SlGraduation } from "react-icons/sl";

const About = () => {
  const aboutBox = [
    {
      id: 1,
      icon: <RiCodeSSlashLine />,
      title: "Front End Skills",
      description:
        "HTML, CSS, Javascript, Tailwind, React.Js, Readux Toolkit and Version Control Tools",
    },
    {
      id: 2,
      icon: <SlGraduation />,
      title: "Education",
      description: "B.com Pitman Shorthand Govt-collage of Commerce Attock",
    },
    {
      id: 3,
      icon: <PiBriefcaseThin />,
      title: "Projects",
      description: "Build more then 5 projects",
    },
  ];
  return (
    <div id="about" className="w-full px-[12%] py-[30px]  dark:text-white dark:bg-black">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="max-w-max mx-auto relative">
          <img
            src="/images/my-dp2.jpg"
            alt="userDp"
            className="w-64 sm:w-80 rounded-3xl max-w-none"
          />
          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15,)] flex items-center justify-center">
            <img
              src="/images/circular-text.png"
              alt=""
              className="w-full animate-slow-spin "
            />
            <img
              src="/images/dev-icon.png"
              alt=""
              className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="max-w-2xl mb-10 font-ovo">
            Interactive Front End React Developer specializing in creating
            responsive and dynamic web applications. Passionate about delivering
            seamless user experiences through innovative design and cutting-edge
            technology.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-auto gap-6 max-w-2xl">
            {aboutBox.map(({ id, icon, title, description }) => (
              <li
                key={id}
                className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-lightHover hover:text-black hover:-translate-y-1 duration-500 hover:shadow-black "
              >
                {icon}
                <h3 className="font-semibold my-4 hover:text-black ">{title}</h3>
                <p className="font-semibold hover:text-black ">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-3 hover:text-black font-ovo">Tools i use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:bg-white">
              <img
                src="/images/vscode.png"
                alt="vs-code-logo"
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:bg-white ">
              <img
                src="/images/git.png"
                alt="git-logo"
                className="w-5 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:bg-white">
              <img
                src="/images/redux-icon.png"
                alt="redux-logo"
                className="w-5 sm:w-7"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
