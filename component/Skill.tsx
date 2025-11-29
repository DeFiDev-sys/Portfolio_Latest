import React from 'react'
import { motion } from 'motion/react';
import { skillCategories } from '@/data/linkdata';
import { containerVariants, itemVariants } from '@/function/MotionVariant';

function Skill() {
  return (
    <section className='dark:bg-gray-900 py-20 px-6 scroll-mt-20' id='Skills'>
        <div className='mx-auto max-w-6xl'>
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="mb-4 text-gray-900 dark:text-white">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies I work with and continue to learn
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="mb-6 text-gray-900 dark:text-white">{category.title}</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-700 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        </div>
    </section>
  )
}

export default Skill