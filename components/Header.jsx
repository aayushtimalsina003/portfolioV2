import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 relative z-10 pt-24 sm:pt-28 md:pt-32">
      {/* Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] bg-accent/20 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] -z-10 animate-pulse"></div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-lg opacity-50 animate-pulse"></div>
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover shadow-2xl relative z-10 border-4 border-white/20"
        />
        <motion.div 
          className="absolute -bottom-2 -right-2 bg-white dark:bg-darkTheme p-2 rounded-full shadow-lg text-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          👋
        </motion.div>
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 font-Ovo tracking-wide text-gray-800 dark:text-gray-200"
      >
        Hi! I'm Aayush Timalsina
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight font-Outfit px-2"
      >
        Backend Developer & <br />
        <span className="text-gradient">AI Engineer</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mt-3 sm:mt-4 font-Inter leading-relaxed px-4"
      >
        Building intelligent backend systems with <span className="font-semibold text-gray-900 dark:text-white">FastAPI</span>, <span className="font-semibold text-gray-900 dark:text-white">Django</span>, and modern AI tools. I turn complex data into powerful applications.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-6 sm:mt-8 md:mt-10 w-full sm:w-auto px-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-black text-white flex items-center justify-center gap-3 dark:bg-white dark:text-black shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-3 sm:w-4 invert dark:invert-0" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Aayush_Resume.pdf"
          download
          className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-gray-300 bg-white/50 backdrop-blur-md flex items-center justify-center gap-3 text-gray-800 dark:text-white dark:bg-transparent dark:border-white/30 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-3 sm:w-4 dark:invert" />
        </motion.a>
      </div>
    </div>
  );
};
export default Header;
