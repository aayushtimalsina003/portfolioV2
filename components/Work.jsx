import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      id="work"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-[10%] xl:px-[12%] py-12 sm:py-16 md:py-20 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-base sm:text-lg font-Ovo text-accent"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-Outfit"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        My Latest Work
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-Inter px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in fullStack development
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-8 sm:my-10 gap-6 sm:gap-7 md:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-darkHover border border-gray-100 dark:border-white/5"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="aspect-video w-full relative overflow-hidden">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:p-3 rounded-full bg-white text-black hover:bg-gray-200 transition-colors transform scale-0 group-hover:scale-100 duration-300 delay-100"
                >
                  <span className="text-xs sm:text-sm font-bold">Code</span>
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:p-3 rounded-full bg-accent text-white hover:bg-accent/80 transition-colors transform scale-0 group-hover:scale-100 duration-300 delay-200"
                >
                  <span className="text-xs sm:text-sm font-bold">Demo</span>
                </a>
              </div>
            </div>
            <div className="p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-primary dark:text-white font-Outfit">{project.title}</h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 font-Inter line-clamp-3">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-sm sm:text-base text-gray-700 border border-gray-300 rounded-full py-2.5 sm:py-3 px-8 sm:px-10 mx-auto my-12 sm:my-16 md:my-20 hover:bg-gray-50 duration-500 dark:text-white dark:border-white dark:hover:bg-white/10 hover:scale-105 transition-transform"
      >
        Show more{" "}
        <Image
          className="w-3 sm:w-4 dark:invert"
          src={assets.right_arrow_bold}
          alt="right arrow"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
