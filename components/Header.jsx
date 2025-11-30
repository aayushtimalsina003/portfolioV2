import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-4xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-6 relative z-10 pt-32">
      {/* Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>

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
          className="rounded-full w-36 h-36 object-cover shadow-2xl relative z-10 border-4 border-white/20"
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
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo tracking-wide text-gray-800 dark:text-gray-200"
      >
        Hi! I'm Aayush Timalsina
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-tight font-Outfit"
      >
        Backend Developer & <br />
        <span className="text-gradient">AI Engineer</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mt-4 font-Inter leading-relaxed"
      >
        Building intelligent backend systems with <span className="font-semibold text-gray-900 dark:text-white">FastAPI</span>, <span className="font-semibold text-gray-900 dark:text-white">Django</span>, and modern AI tools. I turn complex data into powerful applications.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-5 mt-10">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-4 rounded-full bg-black text-white flex items-center gap-3 dark:bg-white dark:text-black shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 font-medium"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4 invert dark:invert-0" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Aayush_Resume.pdf"
          download
          className="px-10 py-4 rounded-full border border-gray-300 bg-white/50 backdrop-blur-md flex items-center gap-3 text-gray-800 dark:text-white dark:bg-transparent dark:border-white/30 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4 dark:invert" />
        </motion.a>
      </div>
    </div>
  );
};
export default Header;
