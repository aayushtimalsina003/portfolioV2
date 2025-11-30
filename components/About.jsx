import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-accent"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Outfit font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl relative z-10"
          />
        </motion.div>
        <motion.div
          className="flex-1 flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-10 max-w-2xl font-Ovo text-lg leading-loose text-gray-600 dark:text-gray-300">
            I am an experienced <span className="text-gray-900 dark:text-white font-semibold">Backend Developer</span> with hands-on expertise in <span className="text-gray-900 dark:text-white font-semibold">AI engineering</span>. Over the past year, I have built scalable backend systems while integrating advanced machine learning and computer vision pipelines. I have collaborated with impactful teams and organizations, contributing to high-performance AI-driven products and backend architectures.
          </p>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                className="border border-gray-200 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-2 duration-500 hover:shadow-lg dark:border-white/10 dark:hover:shadow-white/10 dark:hover:bg-darkHover/50 bg-white dark:bg-transparent"
                whileHover={{ scale: 1.02 }}
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3 mx-auto"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white font-Outfit">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/60 font-Inter">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            className="my-8 text-gray-700 font-Ovo dark:text-white/80 text-xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            Tools And Technologies
          </motion.h4>

          {/* Infinite Scroll Marquee */}
          <div className="w-full overflow-hidden relative">
             <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gray-50 to-transparent z-10 dark:from-darkTheme"></div>
             <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gray-50 to-transparent z-10 dark:from-darkTheme"></div>
             
             <motion.div 
               className="flex gap-8 w-max"
               animate={{ x: [0, -1000] }}
               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
             >
                {[...toolsData, ...toolsData].map((tool, index) => (
                  <div
                    className="flex items-center justify-center w-16 h-16 border border-gray-200 rounded-xl bg-white dark:bg-white/5 dark:border-white/10 shadow-sm"
                    key={index}
                  >
                    <Image src={tool} alt="tool" className="w-8 h-8 object-contain" />
                  </div>
                ))}
             </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default About;
