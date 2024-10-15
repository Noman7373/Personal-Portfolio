import React from "react";

const Footer = () => {
  return (
    <div className="mt-20  dark:text-white dark:bg-darkTheme">
      <div className="text-center">
      <h1 className="text-xl font-semibold font-ovo sm:text-3xl mb-2">
          Noman Ahmed
        </h1>
        <div className="w-max flex items-center gap-2 mx-auto font-ovo ">
          <img src="/images/mail_icon_dark.png" alt="mail-icon" className="w-6" />
          <img src="/images/mail_icon.png" alt="mail-icon" className="w-6 dark:hidden" />
          Nomanahmed7373@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] my-12 py-6">
        <p className="font-ovo">© 2024 Noman Ahmed. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 font-ovo">
          <li>
            <a href="https://www.linkedin.com/in/noman7373/" target="_blank">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/Noman7373" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/nomikhan64672/" target="_blank">
              Instgram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Nomikhan7373" target="_blank">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
