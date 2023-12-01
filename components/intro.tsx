"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import image1 from "@/public/IMG_3010.jpg";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] rext-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={image1}
              alt="Paja photo"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] object-cover  border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="font-bold">Hello, I'm Pavle.</span> I'm a{" "}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className="bg-gray-900 group text-white px-7 py-3 items-center flex gap-2 rounded-full 
          focus:scale-110 outline-none hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href="#contact"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="bg-white group px-7 py-3 items-center flex gap-2 rounded-full focus:scale-110 outline-none
         hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />{" "}
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center rounded-full gap-2 
          focus:scale-110 outline-none hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://linkedin.com" target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center rounded-full text-[1.35rem] gap-2 focus:scale-[1.15] outline-none
         hover:scale-[1.15] hover-text-gray-950 active:scale-105 transition cursor-pointer border border-black/10"
         href="https://github.com" target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
