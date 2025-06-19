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
    <section id="services" className="py-30 bg-white">
      <div className="section-container">
        <div className="text-center mb-24">
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
        </div>
    </section>
  );
};

export default Services;