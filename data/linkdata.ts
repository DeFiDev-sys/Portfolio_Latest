import { link } from "fs";
import { Code2, Github, Linkedin, Mail, MapPin, Rocket, Users } from "lucide-react";

const LinkeData = [
  {
    name: "About Us",
  },
  {
    name: "Skills",

  },
  {
    name: "Projects",

  },
  {
    name: "Contact",
  },
];

const profileLinkData = {
  gitProfile: "https://github.com/DeFiDev-sys",
  linkedInProfile: "https://www.linkedin.com/in/juwon-bowofola-a054b1337",
    projects : [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce website built with React and TypeScript. Features include product filtering, shopping cart, and responsive design.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MzI5MzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Redux','MongoDB', 'Express', 'Node.js', 'REST API'],
      github: 'https://github.com/DeFiDev-sys/eCommerce_dev',
      demo: 'https://vivalavida-mu.vercel.app/',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location search, 5-day forecast, and beautiful animations.',
      image: 'https://images.unsplash.com/photo-1558600053-2efe29d4c053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MzM3NzI2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'API Integration', 'CSS3', 'Geolocation'],
      github: 'https://github.com/DeFiDev-sys/Weather_App',
      demo: 'https://weather-app-rho-ten-13.vercel.app/',
    },
    {
      title: 'Task Management App',
      description: 'Productive task manager with drag-and-drop functionality, categories, and local storage persistence.',
      image: 'https://images.unsplash.com/photo-1651129522359-ce483a8263a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcHxlbnwxfHx8fDE3NjMzNDA1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tech: ['React', 'JavaScript', 'Local Storage', 'MongoDB', 'Express', 'Node.js', 'Redux', 'REST API'],
      github: 'https://github.com/DeFiDev-sys/To-Do-Frontend',
      demo: 'https://to-do-frontend-theta.vercel.app/SignIn',
    },
  ]
};

const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices.',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Always eager to learn new technologies and improve my skills.',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with designers and developers.',
    },
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Responsive Design', 'REST APIs'],
    },
    {
      title: 'Currently Learning',
      skills: ['Next.js', 'Node.js', 'GraphQL', 'Testing', 'Web Performance'],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jayjaybowofola@gmail.com',
      href: 'mailto:jayjaybowofola@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Abuja, Nigeria',
      href: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/juwon-bowofola-a054b1337',
      href: 'https://www.linkedin.com/in/juwon-bowofola-a054b1337',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'https://github.com/DeFiDev-sys',
      href: 'https://github.com/DeFiDev-sys',
    },
  ];

 

export  {LinkeData , profileLinkData,features,skillCategories, contactInfo};
