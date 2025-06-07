import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
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
  
  const values = [
    'Innovation at the core of everything we do',
    'Client-centered approach with tailored solutions',
    'Technical excellence and continuous learning',
    'Transparent communication and reliability'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title inline-block text-center mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn about our mission and what drives us to create innovative solutions
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-secondary-900">Our Story</h3>
              <p className="text-secondary-700 leading-relaxed">
                CloudNest is a dynamic partnership between Geoffrey Omuse and Tyra Nyambura, dedicated to delivering a wide range of digital and cloud-based solutions. Our goal is to provide high-quality, innovative, and efficient services that help businesses grow and thrive in the digital space.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-secondary-900">Our Values</h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* About image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://i.postimg.cc/9MKLMCCT/Safeguard-Your-Business-with-Cloud-Backup-and-Managed-Services-in-Lexington.jpg" 
                alt="CloudNest Team" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Our Promise</h3>
                <p className="text-white/90">Innovative solutions that empower your business.</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-primary-500 rounded-full z-[-1]"></div>
            <div className="absolute -top-4 -left-4 h-16 w-16 bg-secondary-800 rounded-full z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;