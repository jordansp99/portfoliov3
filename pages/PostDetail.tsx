
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Tag, Calendar } from 'lucide-react';
import { BLOG_POSTS, PROJECTS } from '../constants';

// Very simple custom Markdown-like renderer to avoid heavy dependencies 
// while adhering to neobrutalism aesthetics for typography.
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.trim().split('\n');
  
  return (
    <div className="prose-neo space-y-6">
      {lines.map((line, i) => {
        if (line.startsWith('# ')) return <h1 key={i} className="text-5xl font-black mt-12 mb-6 border-b-8 border-yellow-400 pb-2">{line.slice(2)}</h1>;
        if (line.startsWith('## ')) return <h2 key={i} className="text-3xl font-black mt-8 mb-4 border-l-8 border-black pl-4 bg-gray-50">{line.slice(3)}</h2>;
        if (line.startsWith('- ')) return <div key={i} className="flex gap-4 font-bold text-lg items-start"><span className="mt-2 w-3 h-3 bg-black flex-shrink-0"></span><span>{line.slice(2)}</span></div>;
        if (line.startsWith('1. ')) return <div key={i} className="flex gap-4 font-bold text-lg items-start"><span className="px-2 border-2 border-black bg-yellow-200">{line.split('.')[0]}</span><span>{line.slice(3)}</span></div>;
        if (line.trim() === '') return <br key={i} />;
        
        // Handling inline bold **text**
        const formattedLine = line.split(/(\*\*.*?\*\*)/).map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="bg-blue-100 px-1 underline">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        return <p key={i} className="text-xl font-medium leading-relaxed">{formattedLine}</p>;
      })}
    </div>
  );
};

const PostDetail: React.FC<{ type: 'blog' | 'project' }> = ({ type }) => {
  const { id } = useParams();
  const data = type === 'blog' 
    ? BLOG_POSTS.find(p => p.id === id) 
    : PROJECTS.find(p => p.id === id);

  if (!data) return <div className="text-center py-24"><h1 className="text-4xl font-black">CONTENT NOT FOUND</h1></div>;

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      <Link 
        to={type === 'blog' ? '/blog' : '/projects'} 
        className="flex items-center gap-2 font-black border-2 border-black w-fit px-4 py-2 bg-white neo-brutal-shadow-hover transition-all"
      >
        <ArrowLeft size={20} /> BACK TO {type.toUpperCase()}
      </Link>

      <div className="space-y-8">
        {type === 'project' && 'imageUrl' in data && (
          <div className="border-4 border-black neo-brutal-shadow">
            <img src={data.imageUrl} className="w-full h-[400px] object-cover" alt={data.title} />
          </div>
        )}

        <div className="flex flex-wrap gap-4 items-center">
          {'date' in data && (
             <div className="flex items-center gap-2 text-lg font-black bg-blue-400 border-2 border-black px-3 py-1">
                <Calendar size={18} /> {data.date}
             </div>
          )}
          {data.tags.map(tag => (
            <div key={tag} className="flex items-center gap-2 text-lg font-black bg-green-400 border-2 border-black px-3 py-1 uppercase">
              <Tag size={18} /> {tag}
            </div>
          ))}
        </div>

        <div className="bg-white border-4 border-black p-8 md:p-12 neo-brutal-shadow">
          <MarkdownRenderer content={data.markdown} />
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
