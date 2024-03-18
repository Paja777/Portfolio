import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import FHImg from "@/public/FH.png";
import LiveResultImg from "@/public/LR.png";
import YTImg from "@/public/YT.png";
import comicStore from "@/public/ComicStore.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "FindHandyman app",
    description:
      "App that connects users in need of handyman services with skilled professionals.",
    tags: [
      "React",
      "TypeScript",
      "NodeJs",
      "ExpressJs",
      "Jest",
      "Redux",
      "MaterialUi",
    ],
    imageUrl: FHImg,
  },
  {
    title: "ComicBook Store",
    description:
      "E-commerce platform specializing in the sale of comic books, graphic novels, and related merchandise.",
    tags: [
      "React",
      "TypeScript",
      "NodeJs",
      "ExpressJs",
      "Jest",
      "Tailwind",
      "Redux",
      "Mui",
    ],
    imageUrl: comicStore,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Jest",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
  "MaterialUi",
] as const;
