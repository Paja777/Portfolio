'use client';

import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDevider from "@/components/section-devider";
import Skills from "@/components/skills";

export default function Home() {
  return <main className="flex flex-col items-center">
    <Intro />
    <SectionDevider />
    <About />
    <Projects />
    <Skills />
    <Experience />
  </main>; 
}
