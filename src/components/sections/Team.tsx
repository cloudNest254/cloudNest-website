import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { team } from '../../data/team';
import TeamMember from '../ui/TeamMember';

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="team" className="py-30 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title inline-block text-center mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Our Team
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet the experts behind CloudNest's innovative solutions
          </motion.p>
        </div>

        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Join Our Team</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals to join our growing team. If you're passionate about creating innovative solutions and delivering exceptional results, we'd love to hear from you.
          </p>
          <a 
            href="#contact" 
            className="btn btn-primary"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;