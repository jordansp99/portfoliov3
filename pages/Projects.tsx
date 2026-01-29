import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Filter, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTag = searchParams.get('tag');

  const filteredProjects = selectedTag 
    ? PROJECTS.filter(p => p.tags.includes(selectedTag))
    : PROJECTS;

  return (
    <div className="space-y-16">
      <header className="space-y-6 pt-8">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-gray-900">Projects</h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
          A collection of systems I've built, ranging from security wrappers for LLMs to high-performance vision pipelines.
        </p>
        
        <div className="flex items-center gap-3 pt-4">
           <Filter size={16} className="text-gray-400" />
           {selectedTag ? (
             <>
               <span className="text-sm font-mono text-gray-500">Filtered by:</span>
               <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-mono font-bold uppercase tracking-wider">{selectedTag}</span>
               <button 
                  onClick={() => setSearchParams({})}
                  className="text-xs font-mono text-gray-400 hover:text-gray-900 transition-colors border-b border-gray-300 hover:border-gray-900 ml-2"
               >
                  CLEAR_FILTER
               </button>
             </>
           ) : (
             <span className="text-sm font-mono text-gray-400 italic">No active filters</span>
           )}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-16">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="group flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          >
            <div className={`md:w-3/5 overflow-hidden rounded-2xl border border-gray-200 shadow-sm relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-500 z-10 pointer-events-none"></div>
              <img 
                src={project.imageUrl} 
                className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={project.title}
              />
            </div>
            <div className={`md:w-2/5 flex flex-col justify-center space-y-6 ${index % 2 === 1 ? 'md:order-1 md:text-right md:items-end' : ''}`}>
              <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                {project.tags.map(tag => (
                  <button 
                    key={tag} 
                    onClick={() => setSearchParams(selectedTag === tag ? {} : { tag })}
                    className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest transition-all border ${
                      selectedTag === tag 
                        ? 'bg-gray-900 text-white border-gray-900' 
                        : 'bg-white text-gray-500 border-gray-200 hover:border-indigo-400 hover:text-indigo-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <h2 className="text-4xl font-medium tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                <Link to={`/projects/${project.id}`}>{project.title}</Link>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed font-light">
                {project.description}
              </p>
              <Link 
                to={`/projects/${project.id}`} 
                className={`inline-flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-widest text-gray-900 hover:text-indigo-600 transition-colors w-fit group/link ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                View Case Study <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
         <div className="text-center py-32 bg-white/50 border border-dashed border-gray-300 rounded-3xl backdrop-blur-sm">
            <p className="text-lg font-mono text-gray-400 mb-6">NULL_RESULT: No projects found with tag "{selectedTag}"</p>
            <button 
              onClick={() => setSearchParams({})}
              className="px-8 py-3 bg-gray-900 text-white rounded-full text-sm font-mono font-bold hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-200"
            >
              RESET_FILTERS
            </button>
         </div>
      )}
    </div>
  );
};

export default Projects;