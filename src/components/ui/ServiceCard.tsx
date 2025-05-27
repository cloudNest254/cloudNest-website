import React from 'react';
import { Service } from '../../types';
import { 
  Palette, Layout, Database, Search, Share2, Mail, Award, TrendingUp, 
  Monitor, Shield, Cloud, RefreshCw, GitBranch, Lock, Code, Activity, 
  HardDrive, Layers
} from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-10 w-10" };
    
    switch (iconName) {
      case 'palette': return <Palette {...iconProps} />;
      case 'layout': return <Layout {...iconProps} />;
      case 'database': return <Database {...iconProps} />;
      case 'search': return <Search {...iconProps} />;
      case 'share-2': return <Share2 {...iconProps} />;
      case 'mail': return <Mail {...iconProps} />;
      case 'award': return <Award {...iconProps} />;
      case 'trending-up': return <TrendingUp {...iconProps} />;
      case 'monitor': return <Monitor {...iconProps} />;
      case 'shield': return <Shield {...iconProps} />;
      case 'cloud': return <Cloud {...iconProps} />;
      case 'refresh-cw': return <RefreshCw {...iconProps} />;
      case 'git-branch': return <GitBranch {...iconProps} />;
      case 'lock': return <Lock {...iconProps} />;
      case 'code': return <Code {...iconProps} />;
      case 'activity': return <Activity {...iconProps} />;
      case 'hard-drive': return <HardDrive {...iconProps} />;
      case 'layers': return <Layers {...iconProps} />;
      default: return <Cloud {...iconProps} />;
    }
  };

  return (
    <div className={`card group h-full hover:scale-[1.02] ${
      service.division === 'creative' 
        ? 'hover:border-l-4 hover:border-l-primary-500' 
        : 'hover:border-l-4 hover:border-l-secondary-800'
    }`}>
      <div className="p-6 flex flex-col h-full">
        {/* Icon */}
        <div className={`p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-colors ${
          service.division === 'creative'
            ? 'text-primary-600 bg-primary-50 group-hover:bg-primary-100'
            : 'text-secondary-800 bg-secondary-50 group-hover:bg-secondary-100'
        }`}>
          {getIcon(service.icon)}
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-secondary-600 flex-grow">{service.description}</p>
        
        {/* Division Badge */}
        <div className="mt-4">
          <span className={`inline-block text-xs font-medium py-1 px-2 rounded ${
            service.division === 'creative'
              ? 'bg-primary-50 text-primary-700'
              : 'bg-secondary-50 text-secondary-700'
          }`}>
            {service.division === 'creative' ? 'Creative & Marketing' : 'Cloud Engineering'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;