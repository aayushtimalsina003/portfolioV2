import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      
      <nav
        className={`w-full fixed px-4 sm:px-5 md:px-6 lg:px-8 xl:px-[8%] py-3 sm:py-4 z-[60] flex justify-between items-center 
        transition-all duration-300 ${
          isScroll
            ? "bg-white/70 backdrop-blur-lg shadow-md dark:bg-darkTheme/70 dark:shadow-white/10"
            : "bg-transparent"
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-24 sm:w-28 cursor-pointer mr-4 sm:mr-8 lg:mr-14 hover:scale-105 transition-transform duration-300"
          />
        </a>
        
        <ul
          className={`hidden md:flex items-center gap-4 md:gap-6 lg:gap-8 rounded-full px-6 md:px-8 lg:px-12 py-2.5 md:py-3 ${
            isScroll
              ? ""
              : "bg-white/30 shadow-sm backdrop-blur-md border border-white/40 dark:border-white/10 dark:bg-black/20"
          }`}
        >
          {["Home", "About", "My Work", "Contact me"].map((item, index) => (
            <li key={index}>
              <a 
                className="font-Ovo text-xs md:text-sm lg:text-base font-medium hover:text-accent transition-colors relative group" 
                href={`#${item.toLowerCase().replace(" ", "").replace("me", "") === "home" ? "top" : item.toLowerCase().replace(" ", "").replace("me", "") === "mywork" ? "work" : item.toLowerCase().replace(" ", "").replace("me", "")}`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            className="hidden lg:flex items-center gap-2 lg:gap-3 px-6 lg:px-8 py-2 lg:py-2.5 text-sm lg:text-base border border-gray-500 rounded-full ml-2 lg:ml-4 font-medium dark:border-white/50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-md hover:shadow-lg"
            href="#contact"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow"
              className="w-3"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex md:hidden flex-col gap-5 py-20 px-8 fixed right-0 top-0 bottom-0 w-64 sm:w-72 z-50 h-screen bg-white/95 
             backdrop-blur-xl transition-transform duration-500 dark:bg-darkHover/95 dark:text-white shadow-2xl 
             ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer hover:rotate-90 transition-transform duration-300"
            />
          </div>

          {["Home", "About", "My Work", "Contact me"].map((item, index) => (
            <li key={index}>
              <a 
                className="font-Ovo font-medium text-base sm:text-lg hover:text-accent transition-colors" 
                onClick={closeMenu} 
                href={`#${item.toLowerCase().replace(" ", "").replace("me", "") === "home" ? "top" : item.toLowerCase().replace(" ", "").replace("me", "") === "mywork" ? "work" : item.toLowerCase().replace(" ", "").replace("me", "")}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
