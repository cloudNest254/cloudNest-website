import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is project 1',
      image: 'https://i.postimg.cc/9MKLMCCT/Safeguard-Your-Business-with-Cloud-Backup-and-Managed-Services-in-Lexington.jpg',
      url: 'https://www.example.com/project1',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is project 2',
      image: 'https://i.postimg.cc/9MKLMCCT/Safeguard-Your-Business-with-Cloud-Backup-and-Managed-Services-in-Lexington.jpg',
      url: 'https://www.example.com/project2',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is project 3',
      image: 'https://i.postimg.cc/9MKLMCCT/Safeguard-Your-Business-with-Cloud-Backup-and-Managed-Services-in-Lexington.jpg',
      url: 'https://www.example.com/project3',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'This is project 4',
      image: 'https://i.postimg.cc/9MKLMCCT/Safeguard-Your-Business-with-Cloud-Backup-and-Managed-Services-in-Lexington.jpg',
      url: 'https://www.example.com/project4',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'This is project 5',
      image: 'https://i.postimg.cc/9MKLMCCT/Safeguard-Your-Business-with-Cloud-Backup-and-Managed-Services-in-Lexington.jpg',
      url: 'https://www.example.com/project5',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'This is project 6',
      image: 'https://i.postimg.cc/9MKLMCCT/Safeguard-Your-Business-with-Cloud-Backup-and-Managed-Services-in-Lexington.jpg',
      url: 'https://www.example.com/project6',
      technologies: ['React', 'Node.js', 'MongoDB']
    }
  ];

  return (
    <section id="projects" className="py-150 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title inline-block text-center mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           Take a look at some of our recent projects that showcase our expertise and innovation 
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <img src={project.image} alt={project.title} className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-secondary-700 leading-relaxed">{project.description}</p>
              <ul className="space-y-3">
                {project.technologies.map((technology, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary-700">{technology}</span>
                  </li>
                ))}
              </ul>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-800">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;