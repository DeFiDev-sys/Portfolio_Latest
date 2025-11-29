"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profileLinkData } from "@/data/linkdata";
function Hero() {
    const scrollToSection = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  return (
    <section className="p-10 dark:bg-gray-900 w-full min-h-screen flex items-center">
      <div className="mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">👋 Welcome to my portfolio</span>
          </motion.div>

            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-8"
            >Hi, I'm <span className="text-blue-500">Juwon Bowofola</span>
            <br />
            A Jenior Full-Stack Developer
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10"
            >
                I build beautiful, responsive web applications with modern technologies. Passionate about creating seamless user experiences and writing clean code.
            </motion.p>

            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            >
                <Button size={'lg'} onClick={scrollToSection}>View My Projects</Button>

                <Button variant={'outline'} size={'lg'} className="ml-4">
                    <Mail className="mr-2 h-5 w-5"/>
                    <a href="mailto:jayjaybowofola@gmail.com">Contat Me</a>
                </Button>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="my-10 flex items-center justify-center gap-4"
            >
                <a href={profileLinkData.gitProfile} target="_blank" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Github className="h-5 w-5"/>
                </a>

                <a href={profileLinkData.linkedInProfile} target="_blank" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <Linkedin className="h-5 w-5"/>
                </a>
            </motion.div>

            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 , repeat: Infinity, repeatType: "reverse",}}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="h-6 w-6 text-gray-400"/>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
