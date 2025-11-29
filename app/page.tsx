"use client";

import About from "@/component/About";
import Contact from "@/component/Contact";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Project from "@/component/Project";
import Skill from "@/component/Skill";

export default function Home() {
  return (
   <div className="min-h-screen w-full scroll-smooth transition-colors duration-300 overflow-x-hidden">
    <Header/>
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
   </div>
  );
}
