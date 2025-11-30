"use client";

import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { LinkeData } from "@/data/linkdata";

function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" ,block: "start"});
  };
  return (
    <header className="text-center font-bold flex justify-between border-b-2 p-5 lg:p-10 dark:border-b-gray-700 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm  z-50">
      <motion.span
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg lg:text-3xl font-bold"
      >
        Juwon Bowofola
      </motion.span>
      <div className="flex gap-4 items-center">
        <div className="hidden lg:flex justify-between gap-4">
          {
            /* Navigation Links */
            LinkeData.map((link, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => {
                  scrollToSection(link.name);
                }}
                className="hover:text-blue-500 dark:hover:text-gray-500 cursor-pointer"
              >
                {link.name}
              </motion.button>
            ))
          }
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
