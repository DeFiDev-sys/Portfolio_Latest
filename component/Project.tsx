import React from 'react'
import { motion } from 'motion/react';
import { profileLinkData } from '@/data/linkdata';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

function Project() {
  return (
    <section className='scroll-mt-20 py-20 px-2 bg-gray-100 dark:bg-gray-700' id='Projects'>
        <div className='mx-auto max-w-6xl'>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            >
                <h2 className="mb-4 text-gray-900 dark:text-white">My Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Here are some of my recent works
          </p>
            </motion.div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* Project cards will go here */}
                {profileLinkData.projects.map((project, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    >
                <Card className="overflow-hidden p-0 h-full bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <div className="aspect-video bg-linear-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                        fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                  <h3 className="mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm"  className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className='flex'>
                        <Github className="mr-2 h-4 w-4 my-auto" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className='flex'>
                        <ExternalLink className="mr-2 h-4 w-4 my-auto"/>
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Project