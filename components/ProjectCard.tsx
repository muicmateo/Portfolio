import React from 'react';
import { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-gray-50/5 dark:bg-gray-900/40 rounded-lg overflow-hidden shadow-md border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">
      <div className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 h-20 overflow-auto">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-end space-x-4">
          {project.sourceUrl && (
            <a 
              href={project.sourceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <GithubIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              <ExternalLinkIcon className="w-5 h-5" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;