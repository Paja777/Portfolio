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
      <p className="mb-3 text-lg leading">
        <span className="font-bold">
          With over two years of hands-on experience
        </span>{" "}
        in programming, I have contributed to multiple high-stakes projects 🚗🔐
        in both the automotive and military industries 🛡️, where{" "}
        <span className="underline">precision</span>,{" "}
        <span className="underline">security</span>, and{" "}
        <span className="underline">reliability</span> are crucial. I’ve also
        had the opportunity to lead several projects, honing my leadership and
        technical skills 🏆.<br/><br/>
        <span className="italic">Programming is my passion</span> 💻. The thrill
        of solving complex problems is what drives me 🔍, and I{" "}
        <span className="underline">love</span> the satisfaction of finding the
        perfect solution 🎯. Always eager to learn new technologies 🚀, I’m
        currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a full stack
        developer 👨‍💻.
      </p>
    </motion.section>
  );
}
