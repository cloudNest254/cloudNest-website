import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fdwrnj5', 'template_6uwu43m', form.current!, {
        publicKey: 'VBEB9vOTtWbtL9WDj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        },
      );
  };

  return (
    <section id="contact" className="py-50 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2
            className="section-title inline-block text-center mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Reach out to us for any inquiries or to discuss your project needs
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-2 bg-secondary-900 text-white p-8 rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-secondary-300 mb-8">
              Have questions or want to discuss a project? Contact us using the information below or fill out the form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary-400 mt-1 mr-4" />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-secondary-300">cloudnest@support.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary-400 mt-1 mr-4" />
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-secondary-300">+254 745 811 338</p>
                  <p className="text-secondary-300">+254 743 402 487</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-400 mt-1 mr-4" />
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-secondary-300">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-secondary-800">
              <h4 className="text-white font-medium mb-4">Business Hours</h4>
              <p className="text-secondary-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-secondary-300">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-secondary-300">Sunday: Closed</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3 bg-white shadow-lg rounded-lg p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <label className="block text-sm font-medium text-secondary-700 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 mb-4"
              />
              <label className="block text-sm font-medium text-secondary-700 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 mb-4"
              />
              <label className="block text-sm font-medium text-secondary-700 mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 mb-4"
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                <span className="flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
