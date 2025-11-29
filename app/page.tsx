import About from "@/component/About";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Skill from "@/component/Skill";

export default function Home() {
  return (
   <div className="min-h-screen w-full scroll-smooth">
    <Header/>
    <Hero/>
    <About/>
    <Skill/>
   </div>
  );
}
