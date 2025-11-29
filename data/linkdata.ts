import { link } from "fs";
import { Code2, Rocket, Users } from "lucide-react";

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
  projectsLink: [
    {
      name: "Weather App",
      url: "https://weather-app-rho-ten-13.vercel.app/",
    },
    {
      name: "VLV",
      url: "https://vivalavida-mu.vercel.app/",
    },
    {
      name: "Todo App",
      url: "https://to-do-frontend-theta.vercel.app/SignIn",
    },
  ],
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

export  {LinkeData , profileLinkData,features,skillCategories};
