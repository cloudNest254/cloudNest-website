import React from 'react';
import { Mail, Phone, Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '../public/cloudNest.logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
          <div>
            <div style={{ width: 100, height: 100, overflow: 'hidden' }}>
              <img src={logo} style={{ width: 200, height: 'auto', marginLeft: 0 }} />
            </div>
              <span className="text-xl font-bold">CloudNest</span>
            </div>
            <p className="text-secondary-300 mb-4">
              Creative Digital Solutions Meets Scalable Cloud Engineering.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-secondary-300 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-secondary-300 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-secondary-300 hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#team" className="text-secondary-300 hover:text-primary-400 transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-secondary-300 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-secondary-300">cloudnest@support.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 mt-0.5" />
                <div className="text-secondary-300">
                  <div>+254 745 811 338</div>
                  <div>+254 743 402 487</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 mt-12 pt-8 text-center text-secondary-400">
          <p>&copy; {new Date().getFullYear()} CloudNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;