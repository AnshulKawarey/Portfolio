import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export interface ProjectCardProps {
  image: string | any;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  technologies,
  github,
  demo,
}) => {
  return (
    <div className="bg-white dark:bg-matte-900 rounded-xl shadow-md overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg border border-gray-200 dark:border-matte-700">
      <div className="aspect-video w-full">
        <img
          src = {image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-50 dark:bg-matte-700 text-primary-700 dark:text-phthalo-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-phthalo-400 transition-colors"
            >
              <Github size={20} className="mr-1" />
              GitHub
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-phthalo-400 transition-colors"
            >
              <ExternalLink size={20} className="mr-1" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;