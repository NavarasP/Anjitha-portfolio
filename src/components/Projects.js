import React from 'react';
import projectsData from '../data/projectsData';

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal text-center mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="bg-navy p-6 shadow-md rounded-lg text-gray-200 hover:bg-primary transition-colors duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2 text-accent">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="text-gray-400 italic mb-4">{project.contributions}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent mt-4 inline-block underline"
            >
              View Project on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
