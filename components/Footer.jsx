import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-12 sm:mt-16 md:mt-20 pb-8 sm:pb-10 px-4">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-28 sm:w-32 md:w-36 mx-auto mb-2 sm:mb-3"
        />

        <div className="w-max flex items-center gap-2 mx-auto text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 font-Inter">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-4 sm:w-5 md:w-6"
          />
          aayushtimalsina2@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-200 dark:border-gray-700 mx-0 sm:mx-[5%] md:mx-[10%] mt-8 sm:mt-10 md:mt-12 py-5 sm:py-6">
        <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-Inter">© 2025 Aayush Timalsina. All rights reserved.</p>
        <ul className="flex items-center gap-4 sm:gap-6 md:gap-10 justify-center mt-4 sm:mt-0 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 font-Inter">
          <li>
            <a target="_blank" href="https://github.com/aayushtimalsina003" className="hover:text-accent transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aayush-timalsina-b479742b0"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="" className="hover:text-accent transition-colors">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
