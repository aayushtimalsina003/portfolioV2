import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e06f18ef-595e-444b-a49e-ccbe505373ae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      id="contact"
      className="w-full px-4 sm:px-6 md:px-8 lg:px-[10%] xl:px-[12%] py-12 sm:py-16 md:py-20 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none relative"
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
        Connect with me
      </motion.h4>
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-Outfit"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-4 sm:mt-5 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-Inter px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex-1 p-3 sm:p-4 text-sm sm:text-base outline-none border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all dark:bg-darkHover/30 dark:border-white/10 font-Inter"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex-1 p-3 sm:p-4 text-sm sm:text-base outline-none border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all dark:bg-darkHover/30 dark:border-white/10 font-Inter"
            name="email"
            type="text"
            placeholder="Enter your email"
            required
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="w-full p-3 sm:p-4 text-sm sm:text-base outline-none border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm mb-4 sm:mb-6 focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all dark:bg-darkHover/30 dark:border-white/10 font-Inter"
          name="mesage"
          rows="5"
          placeholder="Enter your message"
          required
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="py-2.5 sm:py-3 px-6 sm:px-8 w-full sm:w-max text-sm sm:text-base flex items-center justify-center gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/80 duration-500 dark:bg-white dark:text-black dark:hover:bg-white/90 shadow-lg hover:shadow-glow font-medium"
          type="submit"
        >
          Submit now{" "}
          <Image className="w-3 sm:w-4 invert dark:invert-0" src={assets.right_arrow_white} alt="" />
        </motion.button>

        <p className="mt-3 sm:mt-4 text-center text-sm sm:text-base text-gray-600 dark:text-gray-300">{result}</p>
      </motion.form>
    </motion.div>
  );
};
export default Contact;
