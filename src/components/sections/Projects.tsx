import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../data/Projects';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };


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
              className="space-y-6 flex flex-col"
            >
              <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
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