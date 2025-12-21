
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);

  const filteredPosts = selectedTag
    ? BLOG_POSTS.filter(p => p.tags.includes(selectedTag))
    : BLOG_POSTS;

  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-black underline decoration-green-500 underline-offset-8">BLOG</h1>
        <p className="text-2xl font-bold max-w-2xl">
          Thoughts on AI architecture, deep learning research, and the future of engineering.
        </p>
        {selectedTag && (
          <div className="flex items-center gap-4 pt-4 animate-in fade-in">
             <span className="text-xl font-bold">Filtered by:</span>
             <span className="bg-green-200 border-2 border-black px-3 py-1 font-black text-sm uppercase">{selectedTag}</span>
             <button 
                onClick={() => setSelectedTag(null)}
                className="text-sm font-bold underline decoration-2 hover:text-green-600"
             >
                Clear filter
             </button>
          </div>
        )}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white border-4 border-black p-8 neo-brutal-shadow flex flex-col justify-between hover:bg-orange-50 transition-colors"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                <Calendar size={16} />
                {post.date}
              </div>
              <h2 className="text-3xl font-black leading-tight">
                <Link to={`/blog/${post.id}`} className="hover:underline">{post.title}</Link>
              </h2>
              <p className="font-bold text-gray-600">{post.excerpt}</p>
            </div>
            
            <div className="mt-8 pt-6 border-t-2 border-black flex flex-wrap gap-2">
              {post.tags.map(tag => (
                 <button 
                    key={tag} 
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    className={`border-2 border-black px-2 py-0.5 text-xs font-black uppercase transition-all ${
                      selectedTag === tag 
                        ? 'bg-black text-white scale-110' 
                        : 'bg-green-100 hover:bg-green-200 hover:-translate-y-0.5'
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
         <div className="text-center py-20 bg-gray-100 border-4 border-black border-dashed col-span-full">
            <p className="text-2xl font-bold text-gray-500">No posts found with tag "{selectedTag}"</p>
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

export default Blog;
