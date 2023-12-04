import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDevider from "@/components/section-devider";

export default function Home() {
  return <main className="flex flex-col items-center">
    <Intro />
    <SectionDevider />
    <About />
    <Projects />
  </main>; 
}
