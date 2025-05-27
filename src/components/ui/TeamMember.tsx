import React from 'react';
import { TeamMember as TeamMemberType } from '../../types';
import { Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';

interface TeamMemberProps {
  member: TeamMemberType;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <div className={`card overflow-hidden group ${
      member.division === 'creative' 
        ? 'border-b-4 border-b-primary-500' 
        : 'border-b-4 border-b-secondary-800'
    }`}>
      <div className="relative">
        {/* Image */}
        <img 
          src={member.image}
          alt={member.name} 
          className="w-full h-80 object-cover object-center"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex space-x-3">
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors">
                <Mail className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-sm transition-colors">
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Division Badge */}
        <div className={`absolute top-4 right-4 py-1 px-3 rounded-full text-xs font-medium ${
          member.division === 'creative'
            ? 'bg-primary-500 text-white'
            : 'bg-secondary-800 text-white'
        }`}>
          {member.division === 'creative' ? 'Creative Lead' : 'Cloud Lead'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-secondary-600 mb-4">{member.role}</p>
        
        <div className="space-y-2 text-sm text-secondary-700">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-secondary-500" />
            <span>{member.email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-secondary-500" />
            <span>{member.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;