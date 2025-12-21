
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  const filteredProjects = selectedTag 
    ? PROJECTS.filter(p => p.tags.includes(selectedTag))
    : PROJECTS;

  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-black underline decoration-blue-500 underline-offset-8">PROJECTS</h1>
        <p className="text-2xl font-bold max-w-2xl">
          A collection of systems I've built, ranging from security wrappers for LLMs to high-performance vision pipelines.
        </p>
        {selectedTag && (
          <div className="flex items-center gap-4 pt-4 animate-in fade-in">
             <span className="text-xl font-bold">Filtered by:</span>
             <span className="bg-yellow-400 border-2 border-black px-3 py-1 font-black text-sm uppercase">{selectedTag}</span>
             <button 
                onClick={() => setSelectedTag(null)}
                className="text-sm font-bold underline decoration-2 hover:text-blue-600"
             >
                Clear filter
             </button>
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 gap-12">
        {filteredProjects.map((project) => (
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
                  <button 
                    key={tag} 
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`border-2 border-black px-3 py-1 font-black text-sm uppercase transition-all ${
                      selectedTag === tag 
                        ? 'bg-black text-white scale-110' 
                        : 'bg-yellow-400 hover:bg-yellow-300 hover:-translate-y-1'
                    }`}
                  >
                    {tag}
                  </button>
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
      
      {filteredProjects.length === 0 && (
         <div className="text-center py-20 bg-gray-100 border-4 border-black border-dashed">
            <p className="text-2xl font-bold text-gray-500">No projects found with tag "{selectedTag}"</p>
            <button 
              onClick={() => setSelectedTag(null)}
              className="mt-4 bg-black text-white px-6 py-2 font-black uppercase"
            >
              Clear Filter
            </button>
         </div>
      )}
    </div>
  );
};

export default Projects;
