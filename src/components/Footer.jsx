import React from "react";
import { styles } from "../styles";
import li from "../assets/li.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiSolidUpArrowSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-violet-950 shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={li} className="h-9" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Alex Li
            </span>
          </div>
          <ul className="flex space-x-5 flex-wrap items-center mb-3 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li className=" hover:text-fuchsia-500 rounded-full glow p-2">
              <a href="https://github.com/Kalibur2333" className="text-[28px] ">
                <FaGithub />
              </a>
            </li>
            <li className=" hover:text-fuchsia-500 rounded-full glow p-2">
              <a
                href="https://www.linkedin.com/in/alex-hunter-8b2b3a290/"
                className="text-[28px]"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className=" hover:text-fuchsia-500 rounded-full glow p-2">
              <a href="#" className="text-[28px]">
                <BiSolidUpArrowSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
