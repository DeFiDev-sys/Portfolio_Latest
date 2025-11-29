"use client";

import React from "react";
import { motion } from "motion/react";
import { features } from "@/data/linkdata";
import { containerVariants, itemVariants } from "@/function/MotionVariant";

function About() {
  return (
    <section className="py-20 px-2 bg-gray-100 dark:bg-gray-700 scroll-mt-20" id="About Us">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="mb-4 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a passionate junior frontend developer with a love for creating
            beautiful and functional web experiences. Currently focused on
            mastering React and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl inline-block">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
