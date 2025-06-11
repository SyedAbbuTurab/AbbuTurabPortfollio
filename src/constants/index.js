import { IoCodeSlashOutline } from "react-icons/io5";
import { CiServer } from "react-icons/ci";
import { PiDatabaseThin } from "react-icons/pi";
import { CiGrid42 } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";

import eventique from '../assets/Eventique_project.png';
import car_accident from '../assets/us_car_accident.png';
import natours from '../assets/Natours.png';

const skillIconClass = 'w-6 h-6 md:w-8 md:h-8'

export const RESUME_LINK = 'https://drive.google.com/file/d/1qlutK6HnVSomoBryWQcR9wZ3QAgwV6JE/view?usp=sharing'

export const SKILLS = [
  {
    category: 'languages',
    icon: <IoCodeSlashOutline className={skillIconClass}/>,
    values: ['JavaScript', 'Python', 'SQL', 'TypeScript' ]
  },
  {
    category: 'backend',
    icon: <CiServer className={skillIconClass}/>,
    values: ['Microservices', 'Node.js', 'Express.js', 'REST API', 'GraphQL']
  },
  {
    category: 'databases',
    icon: <PiDatabaseThin className={skillIconClass}/>,
    values: ['MySQL', 'Postgres', 'MongoDB', 'Redis', 'DynamoDB']
  },
  {
    category: 'tools',
    icon: <VscTools className={skillIconClass}/>,
    values: ['git', 'jira', 'agile', 'vscode', 'postman', 'Intellij', 'Docker', 'CI/CD', 'Serverless', 'Containerization', 'Bitbucket']
  },
  {
    category: 'frontend',
    icon: <CiGrid42 className={skillIconClass}/>,
    values: ['React.js','tailwind CSS', 'CSS3', 'HTML']
  },
  {
    category: 'Cloud Technologies',
    icon: <CiGrid42 className={skillIconClass}/>,
    values: ['AWS','Lambda Functions', 'S3', 'SQS', 'SNS', 'Step Functions']
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
    image: 'serverless.png', // Replace with actual image import or path
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
  // Add more projects here if needed
];

// export const PROJECTS = [
//   {
//     title: 'Eventique - AI enhanced event planning',
//     image: eventique,
//     gitlink: `https://github.com/Govind-Asawa/eventique`,
//     description: `A full-stack web application that leverages Large Language model (LLM) service to generate plans for an event. Integrated calendar to visualize user's tasks for an event generated by LLM.`,
//     technologies: [
//       'React.js',
//       'tailwindCSS',
//       'Django',
//       'Gemini-pro',
//       'postgreSql',
//       'GCP',
//       'CI/CD',
//     ],
//   },
//   {
//     title: 'US car accidents',
//     image: car_accident,
//     gitlink: `https://github.com/Govind-Asawa/US_Car_Accidents`,
//     description:
//       'Churned 7.7 million records, achieving 87% accuracy in predicting the severity level of car accidents in the USA by analyzing various factors contributing to the accidents, such as weather conditions, road features (like road crossings, junctions, signals), time and location, etc.',
//     technologies: ['python', 'Data Analysis', 'Machine Learning'],
//   },
//   {
//     title: 'Natours - Book your tour',
//     image: natours,
//     gitlink: `https://github.com/Govind-Asawa/natours-app`,
//     description:
//       'A Web-app for users to browse through available tour packages, view and book tours using secure payment method.',
//     technologies: [
//       'Node.js',
//       'express.js',
//       'HTML',
//       'CSS',
//       'javascript',
//       'pug',
//       'MongoDB',
//     ],
//   },
// ];
