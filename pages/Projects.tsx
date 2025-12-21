
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-black underline decoration-blue-500 underline-offset-8">PROJECTS</h1>
        <p className="text-2xl font-bold max-w-2xl">
          A collection of systems I've built, ranging from security wrappers for LLMs to high-performance vision pipelines.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col md:flex-row gap-8 bg-white border-4 border-black neo-brutal-shadow p-6"
          >
            <div className="md:w-1/2 overflow-hidden border-4 border-black">
              <img 
                src={project.imageUrl} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105" 
                alt={project.title}
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-yellow-400 border-2 border-black px-3 py-1 font-black text-sm uppercase">{tag}</span>
                ))}
              </div>
              <h2 className="text-4xl font-black">{project.title}</h2>
              <p className="text-xl font-bold text-gray-700 leading-relaxed">
                {project.description}
              </p>
              <Link 
                to={`/projects/${project.id}`} 
                className="inline-block bg-black text-white px-8 py-3 text-lg font-black w-fit hover:bg-blue-600 transition-colors"
              >
                EXPLORE CASE STUDY
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
