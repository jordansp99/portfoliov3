import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Tag, Calendar } from 'lucide-react';
import { BLOG_POSTS, PROJECTS } from '../constants';

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('bash', bash);

const PostDetail: React.FC<{ type: 'blog' | 'project' }> = ({ type }) => {
  const { id } = useParams();
  const data = type === 'blog' 
    ? BLOG_POSTS.find(p => p.id === id) 
    : PROJECTS.find(p => p.id === id);

  if (!data) return <div className="text-center py-24"><h1 className="text-4xl font-black">CONTENT NOT FOUND</h1></div>;

  const listPath = type === 'blog' ? '/blog' : '/projects';

  return (
    <article className="max-w-4xl mx-auto space-y-12">
      <Link 
        to={listPath} 
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
            <Link 
              key={tag} 
              to={`${listPath}?tag=${tag}`}
              className="flex items-center gap-2 text-lg font-black bg-green-400 border-2 border-black px-3 py-1 uppercase hover:bg-green-500 transition-colors"
            >
              <Tag size={18} /> {tag}
            </Link>
          ))}
        </div>

        <div className="bg-white border-4 border-black p-8 md:p-12 neo-brutal-shadow">
          <ReactMarkdown 
            className="space-y-6"
            components={{
              h1: ({node, ...props}) => <h1 className="text-5xl font-black mt-12 mb-6 border-b-8 border-yellow-400 pb-2" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-3xl font-black mt-8 mb-4 border-l-8 border-black pl-4 bg-gray-50" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-2xl font-black mt-6 mb-3" {...props} />,
              p: ({node, ...props}) => <p className="text-xl font-medium leading-relaxed mb-6" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside space-y-2 text-lg font-bold ml-4" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-inside space-y-2 text-lg font-bold ml-4" {...props} />,
              li: ({node, ...props}) => <li className="pl-2" {...props} />,
              a: ({node, ...props}) => <a className="underline decoration-2 underline-offset-4 decoration-blue-500 hover:bg-blue-100 transition-colors" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-8 border-black pl-6 py-2 text-2xl font-bold italic bg-gray-100 my-8" {...props} />,
              code: ({node, className, children, ...props}: any) => {
                const match = /language-(\w+)/.exec(className || '')
                const isInline = !match && !String(children).includes('\n');
                
                if (isInline) {
                    return <code className="bg-gray-200 px-1.5 py-0.5 rounded font-mono text-sm border border-black" {...props}>{children}</code>;
                }

                return (
                    <div className="my-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <SyntaxHighlighter
                            style={coldarkDark}
                            language={match ? match[1] : 'text'}
                            PreTag="div"
                            customStyle={{ margin: 0, padding: '1.5rem', background: '#111827' }}
                            {...props}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    </div>
                );
              },
              pre: ({node, ...props}) => <pre className="not-prose" {...props} />,
              img: ({node, ...props}) => <img className="w-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] my-8" {...props} />
            }}
          >
            {data.markdown}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
};


export default PostDetail;