import { assets, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo text-accent"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        What I use
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-bold tracking-tight font-Outfit"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Tools & Technologies
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-gray-300 font-Inter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        I leverage a modern tech stack to build robust and scalable applications.
        Here are the tools I work with daily.
      </motion.p>

      <motion.div
        className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-8 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        {toolsData.map((tool, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center aspect-square bg-white dark:bg-white/5 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 cursor-pointer hover:shadow-glow hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Image src={tool} alt="Tool" className="w-10 sm:w-12 object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
export default Services;
