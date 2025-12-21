
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="space-y-16">
      <header className="space-y-4">
        <h1 className="text-6xl md:text-8xl font-black underline decoration-green-500 underline-offset-8">BLOG</h1>
        <p className="text-2xl font-bold max-w-2xl">
          Thoughts on AI architecture, deep learning research, and the future of engineering.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
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
                <span key={tag} className="bg-green-100 border-2 border-black px-2 py-0.5 text-xs font-black uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
