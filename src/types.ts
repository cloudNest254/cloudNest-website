export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  division: 'creative' | 'cloud';
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  division: 'creative' | 'cloud';
}

export interface NavLink {
  id: string;
  label: string;
  path: string;
}