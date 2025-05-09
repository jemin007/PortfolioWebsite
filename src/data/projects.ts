export type ProjectCategory = 'web' | 'mobile' | 'other';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'EVA - Educational Virtual Assistant',
    description: 'Final Year Project built for Tarsi Group. EVA is an AI-powered academic assistant built with FastAPI and Groqs LLM that helps users create course materials like outlines, lesson plans, assignments, and rubrics through natural conversations.',
    image: '/images/eva.png',
    technologies: ['Python', 'Node.js', 'GroqAPI', 'Vite'],
    category: 'web',
    githubUrl: 'https://github.com/jemin007/EVA',
    liveUrl: 'https://evatool.ai'
  },
  
];

export const certifications = [
  {
    id: 1,
    title: 'HackerRank - SQL (Advanced)',
    link: 'https://www.hackerrank.com/certificates/1eedb6acaf63',
    issueDate: 'Mar 2023',
    image: '/images/hackerrank-adv.png',
  },
  {
    id: 2,
    title: 'DataExpert.io Free Data Engineering Bootcamp Certificate',
    link: 'https://www.dataexpert.io/api/v1/certificate?id=81197&certificate_id=19',
    issueDate: 'Jan 2025',
    image: '/images/dataexpert.png',
  },
  {
    id: 3,
    title: 'AWS Academy Graduate - AWS Academy Data Engineering',
    link: 'https://www.credly.com/badges/d567704a-ace9-4e4c-92f4-b176cd6db0bb/linked_in_profile',
    issueDate: 'Mar 2024',
    image: '/images/aws-de-b.png',
  },
  {
    id: 4,
    title: 'AWS Academy Graduate - AWS Academy Machine Learning Foundations',
    link: 'https://www.credly.com/earner/earned/badge/c2ad4a41-90a9-49c1-85d3-a26d7e52a982',
    issueDate: 'April 2025',
    image: '/images/aws-ml-b.png',
  },
  {
    id: 5,
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    link: 'https://www.credly.com/earner/earned/badge/9d7e1a77-133f-4b90-bc47-2a14be8ab00d',
    issueDate: 'April 2025',
    image: '/images/aws-cf-b.png',
  },
  {
    id: 6,
    title: 'Google Data Analytics Professional Certificate',
    link: 'https://coursera.org/share/2a972053edb56a94161dff4c1e618ec3',
    issueDate: 'May 2023',
    image: '/images/googl-b.png',
  },
];