import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Tag, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS, PROJECTS } from '../constants';

SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('bash', bash);

const PostDetail: React.FC<{ type: 'blog' | 'project' }> = ({ type }) => {
  const { id } = useParams();
  const data = type === 'blog' 
    ? BLOG_POSTS.find(p => p.id === id) 
    : PROJECTS.find(p => p.id === id);

  if (!data) return (
    <div className="flex flex-col items-center justify-center py-32 text-center space-y-4">
        <h1 className="text-6xl font-medium text-gray-900">404</h1>
        <p className="font-mono text-gray-500">ERROR: CONTENT_NOT_FOUND</p>
        <Link to="/" className="text-indigo-600 hover:underline">Return Home</Link>
    </div>
  );

  const listPath = type === 'blog' ? '/blog' : '/projects';

  return (
    <article className="max-w-3xl mx-auto space-y-12 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link 
        to={listPath} 
        className="inline-flex items-center gap-2 text-sm font-mono font-bold text-gray-400 hover:text-indigo-600 transition-colors uppercase tracking-widest group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
        Return to {type === 'blog' ? 'Blog' : 'Projects'}
      </Link>

      <div className="space-y-8">
        <header className="space-y-6 border-b border-gray-100 pb-8">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1]">
                {data.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 items-center">
            {'date' in data && (
                <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-wider">
                    <Calendar size={14} /> {data.date}
                </div>
            )}
            <div className="flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-wider">
                 <Clock size={14} /> 5 min read
            </div>
            
            <div className="flex gap-2 ml-auto">
                {data.tags.map(tag => (
                    <Link 
                    key={tag} 
                    to={`${listPath}?tag=${tag}`}
                    className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 border border-gray-200 text-gray-500 rounded text-[10px] font-mono uppercase tracking-widest hover:border-indigo-400 hover:text-indigo-600 transition-colors"
                    >
                    <Tag size={10} /> {tag}
                    </Link>
                ))}
            </div>
            </div>
        </header>

        {type === 'project' && 'imageUrl' in data && (
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
            <img src={data.imageUrl} className="w-full h-auto object-cover" alt={data.title} />
          </div>
        )}

        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-p:font-light prose-p:leading-relaxed prose-a:text-indigo-600 prose-a:no-underline prose-a:border-b prose-a:border-indigo-200 hover:prose-a:border-indigo-600 prose-img:rounded-2xl prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1 prose-code:rounded prose-code:font-mono prose-code:before:content-none prose-code:after:content-none">
          <ReactMarkdown 
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl mt-16 mb-8 text-gray-900" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl mt-12 mb-6 text-gray-900 flex items-center gap-3 before:content-['#'] before:text-indigo-200 before:font-light" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl mt-8 mb-4 text-gray-900" {...props} />,
              p: ({node, ...props}) => <p className="text-gray-600 mb-6" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-outside space-y-2 ml-4 text-gray-600 mb-6 marker:text-indigo-300" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal list-outside space-y-2 ml-4 text-gray-600 mb-6 marker:text-indigo-300 font-mono text-sm" {...props} />,
              li: ({node, ...props}) => <li className="pl-1" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-2 border-indigo-500 pl-6 py-2 italic text-gray-500 my-8 bg-gradient-to-r from-indigo-50/50 to-transparent" {...props} />,
              code: ({node, className, children, ...props}: any) => {
                const match = /language-(\w+)/.exec(className || '')
                const isInline = !match && !String(children).includes('\n');
                
                if (isInline) {
                    return <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono border border-gray-200" {...props}>{children}</code>;
                }

                return (
                    <div className="my-10 rounded-2xl overflow-hidden shadow-xl border border-gray-800/50 ring-1 ring-white/10">
                        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1b26] border-b border-gray-700/50">
                             <div className="flex gap-1.5">
                                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                             </div>
                             <span className="text-xs font-mono text-gray-500">{match ? match[1] : 'code'}</span>
                        </div>
                        <SyntaxHighlighter
                            style={oneDark}
                            language={match ? match[1] : 'text'}
                            PreTag="div"
                            customStyle={{ margin: 0, padding: '1.5rem', background: '#1a1b26', fontSize: '0.85rem', fontFamily: '"JetBrains Mono", monospace' }}
                            showLineNumbers={true}
                            lineNumberStyle={{ minWidth: '2.5em', paddingRight: '1em', color: '#4b5563', textAlign: 'right' }}
                            {...props}
                        >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    </div>
                );
              },
              img: ({node, ...props}) => (
                  <figure className="my-10">
                    <img className="w-full rounded-2xl shadow-lg border border-gray-100" {...props} />
                    {props.alt && <figcaption className="text-center text-xs font-mono text-gray-400 mt-3 uppercase tracking-widest">{props.alt}</figcaption>}
                  </figure>
              )
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