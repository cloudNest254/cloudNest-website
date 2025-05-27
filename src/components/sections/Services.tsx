import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'creative' | 'cloud'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredServices = services.filter(service => {
    if (activeTab === 'all') return true;
    return service.division === activeTab;
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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

  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title inline-block text-center mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive solutions to help your business thrive in the digital landscape
          </motion.p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'all' 
                  ? 'bg-white shadow-sm text-primary-600' 
                  : 'text-secondary-600 hover:text-primary-600'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveTab('creative')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'creative' 
                  ? 'bg-white shadow-sm text-primary-600' 
                  : 'text-secondary-600 hover:text-primary-600'
              }`}
            >
              Creative & Marketing
            </button>
            <button
              onClick={() => setActiveTab('cloud')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'cloud' 
                  ? 'bg-white shadow-sm text-primary-600' 
                  : 'text-secondary-600 hover:text-primary-600'
              }`}
            >
              Cloud Engineering
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Division Leaders */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="bg-gradient-to-br from-secondary-900 to-secondary-800 text-white p-8 rounded-lg"
          >
            <h3 className="text-xl text-green-400 font-semibold mb-4">Creative and Marketing Division</h3>
            <p className="mb-4">Led by Geoffrey Omuse, our Creative and Marketing Division delivers stunning visual designs, effective digital marketing strategies, and engaging web experiences.</p>
            <a href="#team" className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center">
              Meet Omuse <span className="ml-1">→</span>
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="bg-gradient-to-br from-primary-700 to-primary-800 text-white p-8 rounded-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Cloud Engineering Division</h3>
            <p className="mb-4">Led by Tyra Nyambura, our Cloud Engineering Division provides scalable cloud solutions, infrastructure optimization, and technical excellence.</p>
            <a href="#team" className="text-white hover:text-primary-200 font-medium inline-flex items-center">
              Meet Tyra <span className="ml-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;