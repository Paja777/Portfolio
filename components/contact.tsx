"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import {sendEmail} from '@/actions/sendEmail';


export default function Contact() {
  const { ref } = useSectionInView("Contact");
  
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:pavle.rvovic95@gmail.com">
          pavle.rvovic95@gmail.com
        </a>
      </p>
      <form className="mt-10 flex flex-col"
      action={ async (formData) => {
        console.log('Runing on client');

        await sendEmail(formData);
      }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          placeholder="Your email"
          name="senderEmail"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="message"
          required
          maxLength={5000}
        />
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full bg-gray-900 
          outline-none text-white transition-all"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:translate-x-1 group-hover:-translate-y-1 focus:scale-110 hover:scale-110
           hover:bg-gray-950 active:scale-105"
          />{" "}
        </button>
      </form>
    </motion.section>
  );
}
