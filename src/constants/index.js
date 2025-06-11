import { IoCodeSlashOutline } from "react-icons/io5";
import { CiServer } from "react-icons/ci";
import { PiDatabaseThin } from "react-icons/pi";
import { CiGrid42 } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";

import eventique from '../assets/Eventique_project.png';
import dashboard from '../assets/dashboard.avif';
import blog from '../assets/blog.webp';

const skillIconClass = 'w-6 h-6 md:w-8 md:h-8'

export const RESUME_LINK = 'https://drive.google.com/file/d/1qlutK6HnVSomoBryWQcR9wZ3QAgwV6JE/view?usp=sharing'

export const SKILLS = [
  {
    category: 'languages',
    icon: <IoCodeSlashOutline className={skillIconClass} />,
    values: ['JavaScript', 'Python', 'SQL', 'TypeScript']
  },
  {
    category: 'backend',
    icon: <CiServer className={skillIconClass} />,
    values: ['Microservices', 'Node.js', 'Express.js', 'REST API', 'GraphQL']
  },
  {
    category: 'databases',
    icon: <PiDatabaseThin className={skillIconClass} />,
    values: ['MySQL', 'Postgres', 'MongoDB', 'Redis', 'DynamoDB']
  },
  {
    category: 'tools',
    icon: <VscTools className={skillIconClass} />,
    values: ['git', 'jira', 'agile', 'vscode', 'postman', 'Intellij', 'Docker', 'CI/CD', 'Serverless', 'Containerization', 'Bitbucket']
  },
  {
    category: 'frontend',
    icon: <CiGrid42 className={skillIconClass} />,
    values: ['React.js', 'tailwind CSS', 'CSS3', 'HTML']
  },
  {
    category: 'Cloud Technologies',
    icon: <CiGrid42 className={skillIconClass} />,
    values: ['AWS', 'Lambda Functions', 'S3', 'SQS', 'SNS', 'Step Functions']
  },

]

export const EXPERIENCES = [
  {
    year: 'Mar 2023 - Present',
    role: 'Senior Backend Developer',
    company: 'Mastercard',
    location: 'Chicago, IL',
    description: `Designed scalable, high-performance APIs using Node.js, TypeScript, and Express. 
    Spearheaded real-time backend services with WebSockets and GraphQL. Migrated monolithic applications to microservices, implemented Redis for caching, and enhanced API security with OAuth and JWT. Led CI/CD implementation and mentored junior developers.`,
    technologies: [
      'Node.js',
      'TypeScript',
      'Express',
      'GraphQL',
      'REST APIs',
      'WebSocket',
      'AWS (Lambda, S3, DynamoDB, API Gateway)',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'JWT',
      'OAuth',
      'Jest',
      'Mocha',
      'Terraform'
    ]
  },
  {
    year: 'Jan 2020 - Feb 2023',
    role: 'Senior Full Stack Developer',
    company: 'Fission Labs',
    location: 'Hyderabad, India',
    description: `Developed scalable full-stack apps using Node.js, React, and TypeScript. 
    Led development of reusable frontend components and backend GraphQL APIs. Implemented accessibility standards and optimized performance through Redux and memoization. Managed CI/CD pipelines on Azure DevOps.`,
    technologies: [
      'React',
      'Redux',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'GraphQL',
      'CI/CD',
      'Bootstrap',
      'T-SQL'
    ]
  },
  {
    year: 'Jul 2019 - Dec 2019',
    role: 'Full Stack Engineer',
    company: 'Ensuredit',
    location: 'Hyderabad, India',
    description: `Built RESTful services and automated user provisioning systems with Node.js and MongoDB. 
    Integrated AWS S3 and Lambda for serverless architecture. Focused on user authentication with LDAP and OAuth.`,
    technologies: [
      'Node.js',
      'Express',
      'MongoDB',
      'AWS Lambda',
      'S3',
      'LDAP',
      'OAuth',
      'REST APIs',
      'JavaScript',
      'Jira'
    ]
  },
  {
    year: 'Nov 2018 - Jun 2019',
    role: 'Backend Engineer',
    company: 'Wipro',
    location: 'Hyderabad, India',
    description: `Developed MERN stack applications with React, Node.js, and MongoDB. 
    Created REST APIs, implemented JWT-based authentication, and ensured responsive design using Bootstrap. 
    Used Passport for auth and Karma/Jasmine for testing.`,
    technologies: [
      'Node.js',
      'React',
      'Express',
      'MongoDB',
      'JWT',
      'Passport',
      'TypeScript',
      'Bootstrap',
    ]
  }
];

export const PROJECTS = [
  {
    title: 'Serverless Stack API',
    image: eventique, // Replace with actual image import or path
    gitlink: 'https://github.com/SyedAbbuTurab/serverless-stack-api',
    description: `A serverless backend API built with AWS Lambda and API Gateway, focusing on high scalability and minimal infrastructure management. Integrated with DynamoDB and deployed via AWS SAM for seamless infrastructure-as-code.`,
    technologies: [
      'Node.js',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'Serverless',
      'AWS SAM',
      'CloudFormation',
    ],
  },
  {
    title: 'Remote Work Productivity Dashboard',
    image: dashboard, // Replace with actual image import or path
    gitlink: 'https://github.com/SyedAbbuTurab/remote-work-productivity-dashboard-repository',
    description: `A full-stack MERN application that analyzes remote worker productivity using metrics like task completion, work hours, and mood tracking. Includes role-based authentication, real-time dashboards, and PostgreSQL for data persistence.`,
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'JWT Auth',
      'Redux',
      'Chart.js',
    ],
  }, {
    title: 'Django Blog Web App',
    image: blog, // Replace with actual image
    gitlink: 'https://github.com/SyedAbbuTurab/Django-Blog-webapp',
    description: `A responsive blog platform with user authentication, post creation/editing, and comment features. Built using Django with Bootstrap for frontend styling and SQLite for local persistence.`,
    technologies: [
      'Python',
      'Django',
      'Bootstrap',
      'SQLite',
      'HTML/CSS',
    ],
  },
];
