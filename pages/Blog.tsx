import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, Tag, ArrowUpRight, Filter } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTag = searchParams.get('tag');

  const filteredPosts = selectedTag
    ? BLOG_POSTS.filter(p => p.tags.includes(selectedTag))
    : BLOG_POSTS;

  return (
    <div className="space-y-16">
      <header className="space-y-6 pt-8 bg-white p-8 rounded-3xl shadow-sm">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-gray-900">Blog</h1>
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
          Thoughts on AI architecture, deep learning research, and the future of engineering.
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article 
            key={post.id} 
            className="group flex flex-col justify-between h-full bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-indigo-500">
                <ArrowUpRight size={24} />
             </div>
             
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-wider">
                <Calendar size={12} />
                {post.date}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors pr-6">
                <Link to={`/blog/${post.id}`} className="block focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                </Link>
              </h2>
              <p className="text-gray-500 leading-relaxed font-light line-clamp-3">
                {post.excerpt}
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2 relative z-10">
              {post.tags.map(tag => (
                 <button 
                    key={tag} 
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setSearchParams(selectedTag === tag ? {} : { tag });
                    }}
                    className={`px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest transition-all border ${
                      selectedTag === tag 
                        ? 'bg-gray-900 text-white border-gray-900' 
                        : 'bg-white/50 text-gray-500 border-gray-200 hover:border-indigo-400 hover:text-indigo-600 hover:bg-white'
                    }`}
                  >
                    {tag}
                  </button>
              ))}
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
         <div className="text-center py-32 bg-white/50 border border-dashed border-gray-300 rounded-3xl backdrop-blur-sm col-span-full">
            <p className="text-lg font-mono text-gray-400 mb-6">NULL_RESULT: No posts found with tag "{selectedTag}"</p>
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

export default Blog;