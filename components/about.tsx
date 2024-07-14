"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With over a year of programming experience, I have gained valuable
        skills through working in the IT industry, handling freelance projects,
        and contributing to open-source initiatives. My primary expertise lies
        in <span className="font-medium">React (Next.js)</span>,{" "}
        <span className="font-medium">Node.js</span>, and{" "}
        <span className="font-medium">TypeScript</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a complex problem. I am
        constantly eager to learn new technologies and am currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a full stack
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy painting ,
        watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">playing sports</span>. I like to play{" "}
        <span className="font-medium">tennis and football</span>.
      </p>
    </motion.section>
  );
}
