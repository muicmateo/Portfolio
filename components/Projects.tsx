import React, { forwardRef } from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

const placeholderProjects: Project[] = [
  {
    id: 1,
    title: 'D&D Campaign App',
    description: 'A web application for creating Dungeons & Dragons characters and campaigns, featuring character sheets and a dice roller.',
    tags: ['React', 'TypeScript', 'CSS', 'Google Gemini API'],
    imageUrl: '/Portfolio/assets/images/DnD-AI.png',
    sourceUrl: 'https://github.com/muicmateo/DnD-AI-Dungeon-Master',
  },
  {
    id: 2,
    title: 'FilmBox',
    description: 'a real-time web app where friends vote on movies together to find out which films they would all like to watch.',
    tags: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'socket.io', 'TMDB API'],
    imageUrl: "/Portfolio/assets/images/FilmBox.png",
    sourceUrl: 'https://github.com/mikaolmes/FilmBox',
  },
  {
    id: 3,
    title: 'AI-Image Generator Frontend',
    description: 'A user-friendly interface for the powerful Google Gemini image generation model.',
    tags: ['React', 'TypeScript','Google Gemini API'],
    imageUrl: '/Portfolio/assets/images/AI-Img-gen.png',
    sourceUrl: 'https://github.com/muicmateo/AI-Image-Generator-frontend',
  },
];


const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="projects" ref={ref}>
       <div className="p-6 sm:p-8 bg-white/5 dark:bg-black/20 backdrop-blur-xl rounded-2xl shadow-lg border border-white/10">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholderProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;